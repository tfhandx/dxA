import React, { Component } from 'react'
import './style.less'
import { Spin, Modal, Button, Form, message, Radio } from 'antd';
import { history } from 'umi';
import store from './store'
import { observer } from 'mobx-react'
import Goback from '@/components/Goback/index'
// import SQtextarea from '@/components/SQtextarea/index'
import Input from '@/components/dxinput/index'
import { currency } from '@/utils/number'

const FormItem = Form.Item;
const RadioGroup = Radio.Group
const TextArea = Input.TextArea
const SQtextarea = Input.TextAreaWithMax

@observer
class DetailsVote extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };
  componentDidMount = () => {
    if (window.location.href.indexOf('?uid') !== -1) {
      store.fetchData(window.location.href.split('?uid=')[1])
    }
  }

  componentWillUnmount = () => {
    store.setData()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(
      async (err, values) => {
        if (err) {
          return
        }
        let params = { ...values }
        store.subData(params).then((res) => {
          if (res.data.code === 200) {
            history.push('admin/examinevote/list')
          }
        })
      }
    )
  }


  render() {
    const { loading, data } = store
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    }
    console.log(data.reviewStatus === 0, 'oko')
    return (
      <div className="examinevote-details">
        <Goback btt='/examinevote' />
        <div className="details-card">
          <h2>节点名称</h2>
          <div className="details-box">{data.nickName}</div>
          <h2>DX持仓量</h2>
          <div className="details-box">{currency(data.chkBalance)}<span className="box-span"></span></div>
          <h2>节点质押数量</h2>
          <div className="details-box">{currency(data.deposit)}</div>
          <h2>投票奖励分配</h2>
          <div className="details-box"> {
            `团队${data.rewardRatio}% 自己${100 - data.rewardRatio}%`
          }</div>
          <h2>竞选宣言</h2>
          <div className="details-big-box">{data.manifesto}</div>
          {
            data.type === '取消超级节点' ?
              <div>
                <h2>取消原因</h2>
                <div className="details-big-box">{data.reason}</div>
              </div> : null
          }
          <h2>审核状态</h2>
          <Form onSubmit={this.handleSubmit}>
            <div className="radio-form">
              <FormItem label="审核结果" {...formItemLayout} labelAlign={'left'}>
                {getFieldDecorator('reviewStatus', {
                  initialValue: data.reviewStatus === 0 ? '' : data.reviewStatus === 10 ? '' : data.reviewStatus + ''
                })(
                  <RadioGroup disabled={loading}>
                    <Radio value="30" disabled={data.reviewStatus === 0}>审核通过</Radio>
                    <Radio value="40" disabled={data.reviewStatus === 0}>审核拒绝</Radio>
                    <Radio value="10" disabled={data.reviewStatus === 10}>处理中</Radio>
                  </RadioGroup>
                )}
              </FormItem>
            </div>
            {
              data.type === '取消超级节点' ? null :
                <div>
                  <FormItem label="审核意见" >
                    {getFieldDecorator('reviewOpinion', {
                      initialValue: data.reviewOpinion
                    })(
                      <SQtextarea style={{ height: 80 }} size={20} disabled={loading} />

                    )}
                  </FormItem>

                </div>
            }
            <FormItem>
              <Button
                type='primary'
                className="form-button"
                htmlType='submit'
                disabled={loading || data.reviewStatus === 30 || data.reviewStatus === 40}
                style={{ marginTop: 28, width: 125, height: 48, marginBottom: 45, float: "right" }}
              >
                确定
                  </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(observer(DetailsVote))

{/* <SQtextarea style={{ height: 80 }} size={20} loading={loading} /> */ }