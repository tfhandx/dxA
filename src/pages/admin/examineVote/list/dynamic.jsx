import React, { Component } from 'react'
import './style.less'
import { Spin, Modal, Button, Tabs, Table, Tag, Switch } from 'antd';
import { history } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import moment from 'moment';
import { currency } from '@/utils/number'
import { observer } from 'mobx-react'
import Goback from '@/components/Goback/index'
import store from './store'

const { TabPane } = Tabs;
const dateFormat = 'YYYY-MM-DD';

@observer
class ExamineVote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'all',
      type: 'apply'
    }
    this.columns = [
      {
        title: '节点名称',
        dataIndex: 'nickName',
        key: 'nickName',
        width: '15%'
      }, {
        title: '真实姓名',
        dataIndex: 'realName',
        key: 'realName',
        width: '14%'
      },
      {
        title: '质押数量',
        dataIndex: 'deposit',
        key: 'deposit',
        width: '15%',
        render: (text, record, index) => {
          return (
            <span key={record.id}>
              {currency(record.deposit)}
            </span>
          )
        }
      }, {
        title: '持仓数量',
        dataIndex: 'chkBalance',
        key: 'chkBalance',
        width: '14%',
        render: (text, record, index) => {
          return (
            <span key={record.id}>
              {currency(record.chkBalance)}
            </span>
          )
        }
      }, {
        title: '状态',
        dataIndex: 'reviewStatus',
        key: 'reviewStatus',
        width: '10%',
        render: (text, record, index) => {
          return (
            <span key={record.id}>
              {this.typeName(record.reviewStatus)}
            </span>
          )
        }
      }, {
        title: '分配比例',
        dataIndex: 'rewardRatio',
        key: 'rewardRatio',
        width: '20%',
        render: (text, record, index) => {
          return (
            <span key={record.id}>
              {
                `团队${record.rewardRatio}% 自己${100 - record.rewardRatio}%`
              }
            </span>
          )
        }
      },
      {
        title: '上/下线',
        dataIndex: 'online',
        key: 'online',
        width: '10%',
        render: (text, record, index) => {
          return (
            <Switch
              // value={record.uid}
              defaultChecked={record.online}
              // Checked={record.online}
              onChange={(checked, e) => this.witchOnChange(checked, e, record.uid)} />
          )
        }
      }, {
        title: '操作',
        dataIndex: 'add',
        key: 'add',
        width: '20%',
        render: (text, record, index) => {
          return (
            <div className="qu-btn" onClick={this.onButton.bind(this, record)}>查看</div>
          )
        }
      },
    ]
  };

  componentDidMount = () => {
    store.tabChange({ status: this.state.status, type: this.state.type })
  }

  componentWillUnmount = () => {
    store.sentData()
  }

  typeName = (type) => {
    switch (type) {
      case 0: return <Tag color='geekblue' key={type}>
        待审核
      </Tag>; break;
      case 30: return <Tag color='green' key={type}>
        审核通过
    </Tag>; break;
      case 10: return <Tag color='orange' key={type}>
        处理中
 </Tag>; break;
      case 40: return <Tag color='red' key={type}>
        审核拒绝
    </Tag>; break;
    }
  }

  onChange = (value) => {
    this.setState({
      status: value
    }, () => {
      let data = {}
      if (this.state.status === '4' || this.state.status === '5') {
        data = {
          online: this.state.status === '4',
          type: this.state.type
        }
      } else {
        data = {
          status: this.state.status,
          type: this.state.type
        }
      }
      store.tabChange(data)
    })
  }

  witchOnChange = (checked, e, op) => {
    const data = {
      online: checked,
      uid: op,
    }
    store.subOline(data)

    console.log('eee', e, checked, op)
  }

  onButton = (item) => {
    history.push(`/admin/verify/detail?uuid=${item.orderId}`)
  }

  onTypeChange = (value) => {
    this.setState({
      type: value
    }, () => {
      let data = {}
      if (this.state.status === '4' || this.state.status === '5') {
        data = {
          online: this.state.status === '4',
          type: this.state.type
        }
      } else {
        data = {
          status: this.state.status,
          type: this.state.type
        }
      }
      store.tabChange(data)
    })
  }

  render() {
    const { staffList, pageInfo, loading } = store
    const { status, type } = this.state
    return (
      <PageHeaderWrapper>
        <div className="examine-vote">
          <Tabs className="main-tabs" activeKey={type} onChange={this.onTypeChange} >
            <TabPane tab='申请节点' key='apply' />
            <TabPane tab='修改节点' key='update' />
            <TabPane tab='取消节点' key='cancel' />
            <TabPane tab='恢复节点' key='reinstate' />
          </Tabs>
          <Tabs className="main-tabs" activeKey={status} onChange={this.onChange} type="card">
            <TabPane tab='全部' key='all' />
            <TabPane tab='审核通过' key='passed' />
            <TabPane tab='待审核' key='init' />
            <TabPane tab='审核拒绝' key='rejected' />
            <TabPane tab='处理中' key='processing' />
            <TabPane tab='上线' key='4' />
            <TabPane tab='下线' key='5' />
          </Tabs>
          <Table
            scroll={
              window.document.body.offsetWidth < 1200 ? { x: 900 } : { x: 0 }
            }
            style={
              {
                marginTop: 30
              }
            }
            size='middle'
            loading={loading}
            rowKey={record => record.id}
            columns={this.columns || []}
            dataSource={staffList.slice()}
          />
        </div>
      </PageHeaderWrapper>
    )
  }
}

export default ExamineVote;