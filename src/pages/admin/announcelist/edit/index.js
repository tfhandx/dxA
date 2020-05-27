import React, { Component } from 'react'
import './style.less'
import { message, Form, Icon, Input, Button, Row, Col, Modal, Upload, Select, DatePicker, Checkbox, Spin, Card } from 'antd';
import { history } from 'umi';
import { FormInstance } from 'antd/lib/form';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { EllipsisOutlined, PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import store from './store.js'
import { baseUrl } from '@/utils/index'
import { observer } from 'mobx-react'
import locale from 'antd/es/date-picker/locale/zh_CN';
import { get, post, del } from '@/utils/fetch'
import listStore from '../list/store'
import storage from '@/utils/storage'
import moment from 'moment';
import E from 'wangeditor'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const token = storage.get('user') && Object.prototype.hasOwnProperty.call(storage.get('user'), 'token') && storage.get('user').token || ''

const FormItem = Form.Item;
const Option = Select.Option
const dateFormat = 'YYYY-MM-DD HH:mm:ss';

@observer
class AnnounceList extends Component {
  formRef = React.createRef();
  state = {
    previewVisible: false,
    previewImage: '',
    imgList: [],
    content: '',
    show: 'new',
    title: '新增公告'
  };

  componentDidMount() {
    if (window.location.href.indexOf('?id=') !== -1) {
      const id = window.location.href.split('?id=')[1] === 'new' ? 'new' : Number(window.location.href.split('?id=')[1])
      this.setState({ show: id }, () => {
        this.state.show !== 'new' && listStore.noticeList.map((item, index) => {
          if (item.id === this.state.show) {
            const showFlag = this.state.show !== 'new'
            console.log(item.id, this.state.show)
            this.formRef.current.setFieldsValue({
              category: showFlag ? item.category : null,
              title: showFlag ? item.title : null,
              summary: showFlag ? item.summary : null,
              publishTime: showFlag && item.publishTime ? moment(item.publishTime, dateFormat) : null
            })
            store.formQuery(item, id)
            if (item.content) {
              this.editor.txt.html(item.content)
            }
            if (item.coverImageUrl) {
              this.setState({
                imgList: [{
                  uid: '1',
                  name: 'xxx.png',
                  status: 'done',
                  url: item.coverImageUrl,
                },],
                title: '编辑公告'
              })
            }
          }
        })
      })
    }
    this.initEditor()
  }

  componentWillUnmount = () => {
    store.setData()
  }

  initEditor = async () => {
    const elem = this.refs.editorElem
    const editor = new E(elem)
    this.editor = editor
    editor.customConfig.zIndex = 100
    editor.customConfig.uploadImgServer = '/fileclient-management/api/uploadpic'
    // 限制一次最多上传 1 张图片
    editor.customConfig.uploadImgMaxLength = 1
    editor.customConfig.customUploadImg = function (files, insert) {
      // files 是 input 中选中的文件列表
      if (files[0]) {
        const formData = new window.FormData()
        formData.append('file', files[0], 'cover.jpg')
        // formData.append('uid', storage.get('uesr') && storage.get('uesr').uid)
        // formData.append('token', storage.get('uesr') && storage.get('uesr').token)
        console.log(formData, 'okok')
        let res = post(baseUrl + '/api/announce/upload-image', formData).then((res) => {
          const data = res.data.data
          console.log(data, 'data000')
          if (data) {
            // 上传代码返回结果之后，将图片插入到编辑器中
            insert(data.url)
          } else {
            console.log(data.msg)
          }
        })
      } else {
        message.info('請選擇要上傳的圖片')
      }
    }

    editor.customConfig.menus = [
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      // 'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      //  'quote', // 引用
      // 'emoticon', // 表情
      'image', // 插入图片
      // 'table', // 表格
      // 'video', // 插入视频
      // 'code', // 插入代码
      // 'undo', // 撤销
      // 'redo' // 重复
    ]
    editor.create()
  }

  handleChange = ({ file, fileList }) => {
    console.log('file', file, 'fileList', fileList)
    this.setState({
      imgList: fileList,
    })
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  // 返回上级
  goback = () => {
    history.push('admin/announcelist/list')
  }
  // 提交
  handleSubmit = (status, e) => {
    e.preventDefault();
    this.formRef.current.validateFields().then(values => {
      let params = { ...values }
      // // 点击按钮后，将表单提交给后台
      params.publishTime = params.publishTime ? moment(params.publishTime).format(dateFormat) : null
      params.content = this.editor.txt.html()
      params.status = status
      console.log('params.coverImageUrl', params.coverImageUrl)
      params.coverImageUrl = this.state.imgList.length !== 0 && params.coverImageUrl ? params.coverImageUrl.file.response.data.url : this.state.imgList[0].url
      if (status === 3) {
        storage.set('data', params)
        // const w = window.open('about:blank');
        const link = "/admin/announcelist/detail?preview"
        history.push(link);
      } else {
        store.addForm(params)
          .then(res => {
            if (res.data.code === 200 && status === 1) {
              store.formQuery({}, '')
              history.push('/admin/announcelist/list')
            }
          })
      }

    })
  };

  render() {
    const { previewVisible, previewImage, imgList, show, title } = this.state; //  从 state 中拿数据
    // const { getFieldDecorator, getFieldsValue } = this.formRef.current;
    const { data, loading } = store
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Spin spinning={loading}>
          <Card>
            <PageHeaderWrapper title={title} />
            <Row>
              <Col className="personal-title" span={20}>{''}</Col>
              <Col className="personal-title" span={4}>
                <Button onClick={this.goback}>
                  {/* <Icon type="arrow-left" /> */}
                  <ArrowLeftOutlined />
              返回上级
            </Button>
              </Col>
            </Row>
            <Form
              ref={this.formRef}
              hideRequiredMark
              style={{ marginTop: 8 }}>
              <FormItem label="上传封面图片"
                name="coverImageUrl"
                rules={[
                  {
                    validator: (rule, value) => {
                      if (this.state.imgList.length === 0) {
                        return Promise.reject("请上传封面图片");
                      }
                      return Promise.resolve()
                    }
                  }
                ]}
              >

                <Upload
                  action={baseUrl + '/api/announce/upload-image'}
                  // data={{ uid: storage.get('uesr') && storage.get('uesr').uid }}
                  listType="picture-card"
                  fileList={imgList}
                  headers={{ Authorization: `Bearer ${token}` }}
                  onPreview={this.handlePreview} // 点击图片缩略图，进行预览
                  // beforeUpload={this.handleBeforeUpload} // 上传之前，对图片的格式做校验，并获取图片的宽高
                  onChange={this.handleChange} // 每次上传图片时，都会触发这个方法
                >
                  {imgList.length >= 1 ? null : uploadButton}
                </Upload>
              </FormItem>
              <Row>
                <Col span={12}>
                  <FormItem
                    name="category"
                    rules={[{ required: true, message: '请选择类别！' }]}
                  // initialValue={show !== 'new' ? data.category : ''}
                  >
                    <Select
                      filterOption={false}
                      className="login-select"
                      // mode="multiple"
                      placeholder='请选择类别'
                    // onSelect={this.onSelect.bind(this)}
                    >
                      {
                        store.areaCode && store.areaCode.length > 0 && store.areaCode.map((item, index) => (
                          <Option key={item.id} value={item.id} >{item.value}</Option>
                        ))
                      }
                    </Select>
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <FormItem
                    name="title"
                    rules={[{ required: true, message: '请输入标题！' }]}
                  // initialValue={show !== 'new' ? data.title : null}
                  >
                    <Input placeholder='请输入标题' />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <FormItem
                    name='summary'
                    rules={[{ required: true, message: '请输入摘要！' }]}
                  // initialValue={show !== 'new' ? data.summary : null}
                  >
                    <Input placeholder='请输入摘要' />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <FormItem
                    name='publishTime'
                    rules={[{ required: true, message: '请选择发布日期' }]}
                  // initialValue={show !== 'new' && data.publishTime ? moment(data.publishTime, dateFormat) : null}
                  >
                    <DatePicker
                      style={{ width: '100%' }}
                      format={dateFormat}
                      locale={locale}
                      placeholder='请选择发布日期'
                      allowClear={false}
                      showTime
                    // onChange={this.dateChange}
                    />
                  </FormItem>
                </Col>
              </Row>
              <div ref='editorElem' style={{ textAlign: 'left' }} />
              <FormItem
                name='sticky'
                initialValue={show !== 'new' ? data.sticky : false}
                valuePropName='checked'
              >
                <Checkbox>是否置顶</Checkbox>
              </FormItem>
              <FormItem style={{ float: 'right' }}>
                <Button type='primary' htmlType='submit' style={{ width: 120, height: 40, marginLeft: 20 }} onClick={this.handleSubmit.bind(this, 3)}>预览</Button>
                <Button type='primary' htmlType='submit' style={{ width: 120, height: 40, marginLeft: 20 }} onClick={this.handleSubmit.bind(this, 0)}>保存草稿</Button>
                <Button type='primary' htmlType='submit' style={{ width: 120, height: 40, marginLeft: 20 }} onClick={this.handleSubmit.bind(this, 1)}>发布</Button>
              </FormItem>
            </Form>
          </Card>
        </Spin>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div >
    );
  }
}

export default AnnounceList

