import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history , Prompt } from 'umi';
import { currency } from '@/utils/number'

import { Button, Descriptions, Card, Spin, Tabs, Tag, Switch } from 'antd'
// import Savinglog from './components/login/index'
import HooksTable from '@/components/hooksTable/index'
import { querysomething } from './service'
import styles from './index.less';

const { TabPane } = Tabs;
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
const onButton = (record) => {
    history.push(`/admin/verify/detail?uid=${record.uid}`)
}
const witchOnChange = (checked, e) => {
    const data = {
        online: checked,
        uid: e.target.value
    }
    store.subOline(data)

    console.log(checked, e.target.value)
}
const columns = [
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
                    {typeName(record.reviewStatus)}
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
                <Switch value={record.uid} defaultChecked={record.online} onChange={witchOnChange} />
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
const SavingDetail = ({ ...props }) => {
    const { location: { query: { id: uid } } } = props
    const [type, tabChange] = useState('apply');
    const [status, tabChangeStatus] = useState('all');
    const { state, toggle, setTrue, setFalse } = useBoolean(true);
    useEffect(() => {
        // setType(history.location.query.id)
        // console.log('uid', uid)
    }, [uid])
    const { data, error, loading } = useRequest(querysomething)
    console.log('history.location.query.id', history.location.query.id)
    const onTypeChange = (value) => {
        tabChange(value)
    }
    const onChange = (value) => {
        tabChangeStatus(value)
    }
    return <div>
        <Card bordered={false} >
            <PageHeaderWrapper />
            <Card>
                {/* <Tabs className="main-tabs" value={type} defaultActiveKey='all' onChange={onChange}>
                    <TabPane tab='全部' key='all'>
                    </TabPane>
                    <TabPane tab='审核通过' key='1'>
                    </TabPane>
                    <TabPane tab='待审核' key='0'>
                    </TabPane>
                    <TabPane tab='审核拒绝' key='2'>
                    </TabPane>
                </Tabs> */}
                //新的审核
                <Tabs className="main-tabs" activeKey={type} onChange={onTypeChange}>
                    <TabPane tab='申请节点' key='apply' />
                    <TabPane tab='修改节点' key='update' />
                    <TabPane tab='取消节点' key='cancel' />
                    <TabPane tab='恢复节点' key='reinstate' />
                </Tabs>
                <Tabs className="main-tabs" activeKey={status} onChange={onChange}>
                    <TabPane tab='全部' key='all' />
                    <TabPane tab='审核通过' key='passed' />
                    <TabPane tab='待审核' key='init' />
                    <TabPane tab='审核拒绝' key='rejected' />
                    <TabPane tab='处理中' key='processing' />
                    <TabPane tab='上线' key='4' />
                    <TabPane tab='下线' key='5' />
                </Tabs>
                <HooksTable deps={[type]} depsProps={type === 'all' ? {} : { status: (type === 'all' ? type : Number(type)) }} usePagination columns={columns} api='/api/review/candidate/getall' method='GET' />
            </Card>
        </Card>
    </div >


}
export default SavingDetail;