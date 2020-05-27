import React, { Component } from 'react'
import './style.less'
import { Tabs, Form, Button, Row, Col, Dropdown, Menu, Pagination, Checkbox, Empty, Spin, Card } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import store from './store.js'
import { history } from 'umi';
import storage from '@/utils/storage'
import { observer } from 'mobx-react'

const { TabPane } = Tabs;
const MenuItem = Menu.Item
@observer
class AnnounceList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  };

  componentDidMount = () => {
    let num = storage.get('user') && storage.get('user').role && storage.get('user').role.indexOf(1) !== -1 ? 1 : 0
    console.log('storage', JSON.parse(localStorage.getItem('user')))
    // num = [1].indexOf(1) !== -1 ? 1 : 0
    this.setState({
      num
    }, () => {
      store.queryAnnounce(this.state.num, null)
    })
  }
  componentWillUnmount = () => {
    store.setData()
  }

  callback = (value) => {
    if (value === 'all') {
      value = null
    }
    store.tabsChange(this.state.num, value)
  }

  goDetail = (id) => {
    history.push(`/admin/announcelist/detail?id=${id}`)
  }

  onShowSizeChange = (current, size) => {
    store.onShowSizeChange(current, size, this.state.num)
  }
  delList = (id) => {
    store.delList(id, this.state.num)
  }
  editList = (id) => {
    // history.push({
    //   pathname: pathname,
    //   query: {
    //     id: history.location.query.id,
    //   },
    // });
    history.push(`/admin/announcelist/edit?id=${id}`)
  }
  handleNew = () => {
    history.push(`/admin/announcelist/edit?id=new`)
  }

  checkboxChange = (e) => {
    store.checkboxChange(e.target.checked, this.state.num)
  }

  errSrc = () => {
    console.log(123)
  }

  render() {
    const { noticeList, pageInfo, loading } = store
    const { num = 1 } = this.state
    return (
      <div className="announce-list">
        <Card>
          <PageHeaderWrapper
            //   extra={
            //     [
            //       <Button style={{ marginRight: 10 }} key="3">Operation</Button>,
            //       <Button style={{ marginRight: 10 }} key="2">Operation</Button>,
            //       <Button style={{ marginRight: 10 }} key="1" type="primary">
            //         Primary
            // </Button>,
            //       <DropdownMenu key="more" />,
            //     ]
            //   } 
            extra={num === 1 && [

              <Button
                className="fr"
                key='new'
                type="primary"
                onClick={this.handleNew}
              >
                新增公告
              </Button>
            ]} />
          <div>
            <Tabs defaultActiveKey="all" onChange={this.callback}>
              <TabPane tab="全部" key="all">
              </TabPane>
              <TabPane tab="新功能" key="upgrade">
              </TabPane>
              <TabPane tab="活动公告" key="activity">
              </TabPane>
            </Tabs>
          </div>
          <div>
            <Spin spinning={loading}>
              {
                noticeList.length === 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> :
                  noticeList.length !== 0 && noticeList.map((item, index) => {
                    return (
                      <div className="list-box" key={item.id} >
                        <Row>
                          <Col xl={8} xs={8}>
                            <div className="box-left" onClick={this.goDetail.bind(this, item.id)}>
                              {
                                item.coverImageUrl ? <img src={item.coverImageUrl} onError={this.errSrc} /> : null
                              }
                            </div>
                          </Col>
                          <Col xl={16} xs={16}>
                            <div className="box-right">
                              <div className="box-right-new">
                                {
                                  item.sticky ? '置顶' : null
                                }
                              </div>
                              <div className="box-right-title">
                                <span className="box-right-left" onClick={this.goDetail.bind(this, item.id)}>
                                  {item.title}
                                </span>
                                {
                                  num === 1 &&
                                  <Dropdown className="fr user-img"
                                    overlay={<Menu>
                                      <MenuItem key="1" onClick={this.editList.bind(this, item.id)}>编辑</MenuItem>
                                      <MenuItem key="2" onClick={this.delList.bind(this, item.id)}>删除</MenuItem>
                                    </Menu>}
                                    trigger={['click']}>
                                    {/* <i className={['iconfont', 'icon-more'].join(' ')}></i> */}
                                    {/* <Button
                                      style={{
                                        border: 'none',
                                        padding: 0,
                                      }}
                                    > */}
                                      <EllipsisOutlined
                                        style={{
                                          fontSize: 20,
                                          verticalAlign: 'top',
                                        }}
                                      />
                                    {/* </Button> */}
                                  </Dropdown>
                                }
                              </div>
                              <p className="box-right-content" onClick={this.goDetail.bind(this, item.id)}>
                                {item.summary}
                              </p>
                              <p className="box-right-time" style={{ marginTop: item.sticky ? window.document.body.offsetWidth < 1200 ? 0 : 35 : window.document.body.offsetWidth < 1200 ? 30 : 58 }}>
                                发布时间:  {item.publishTime}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    )
                  })
              }
            </Spin>
          </div>
          <div className="fr" style={{ marginTop: 40 }}>
            <Pagination
              // showSizeChanger={true}  
              // pageSizeOptions={['10', '20', '30']}
              // onShowSizeChange={this.onShowSizeChange}
              pageSize={pageInfo.pageSize}
              total={pageInfo.total}
              showTotal={total => `共 ${total} 条数据`}
              defaultPageSize={6}
              current={pageInfo.pageIndex}
              onChange={this.onShowSizeChange}
              size={'normal'} />
          </div>
          {
            num === 1 && <div className="fl" style={{ marginTop: 50 }}>
              <Checkbox onChange={this.checkboxChange}>只看草稿</Checkbox>
            </div>
          }
        </Card>
      </div>
    )
  }
}

export default AnnounceList