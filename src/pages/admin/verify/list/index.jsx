import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { Prompt } from 'umi';
import { Button, Descriptions, Card, Spin, Tabs, Tag } from 'antd'
// import Savinglog from './components/login/index'
import HooksTable from '@/components/hooksTable/index'
import { querysomething } from './service'
import styles from './index.less';
const { TabPane } = Tabs;
const typeName = (type) => {
    switch (type) {
        case 0: return <Tag color='geekblue' key={type}>
            待审核
      </Tag>; break;
        case 1: return <Tag color='green' key={type}>
            审核通过
    </Tag>; break;
        case 2: return <Tag color='red' key={type}>
            审核拒绝
    </Tag>; break;
    }
}
const onButton = (record) => {
    history.push(`/admin/verify/detail?uid=${record.uid}`)
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
    }, {
        title: '操作',
        dataIndex: 'add',
        key: 'add',
        width: '10%',
        render: (text, record, index) => {
            return (
                <div className="qu-btn" onClick={() => onButton(record)}><a>查看</a></div>
            )
        }
    },
]
const SavingDetail = ({ ...props }) => {
    const { location: { query: { id: uid } } } = props
    const [type, tabChange] = useState('all');
    const { state, toggle, setTrue, setFalse } = useBoolean(true);
    useEffect(() => {
        // setType(history.location.query.id)
        // console.log('uid', uid)
    }, [uid])
    const { data, error, loading } = useRequest(querysomething)
    console.log('history.location.query.id', history.location.query.id)
    const onChange = (value) => {
        tabChange(value)
    }
    return <div>
        <Card bordered={false} >
            <PageHeaderWrapper />
            <Card>
                <Tabs className="main-tabs" value={type} defaultActiveKey='all' onChange={onChange}>
                    <TabPane tab='全部' key='all'>
                    </TabPane>
                    <TabPane tab='审核通过' key='1'>
                    </TabPane>
                    <TabPane tab='待审核' key='0'>
                    </TabPane>
                    <TabPane tab='审核拒绝' key='2'>
                    </TabPane>
                </Tabs>
                <HooksTable deps={[type]} depsProps={type === 'all' ? {} : { status: (type === 'all' ? type : Number(type)) }} usePagination={true} columns={columns} api='/api/review/candidate/getall' method='GET' />
            </Card>
        </Card>
    </div >


}
export default SavingDetail;