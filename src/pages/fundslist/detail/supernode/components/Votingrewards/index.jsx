import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { Button, Descriptions, Card, Spin, Tabs, Divider } from 'antd'
import { querysomething } from './service'
import { strInsert } from '@/utils/utils'
import HooksTable from '@/components/hooksTable/index'
import styles from './index.less';
const columns = [
    {
        title: '周期',
        dataIndex: 'epoch',
        key: 'epoch',
        // align: 'right',
        width: '10%',
    },
    {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        width: '20%',
    },
    {
        title: '出块总数',
        dataIndex: 'blocks',
        width: 'blocks%',
        key: 'type',
        width: '10%',
    },
    {
        title: '出块总奖励（DX)',
        dataIndex: 'blockRewards',
        key: 'blockRewards',
        width: '20%',
        align: 'right',
        render: (text, record, index) => {
            return (
                <span key={record.id}>
                    {
                        currency(record.blockRewards)
                    }
                </span>
            )
        }
    },
    {
        title: '分配给矿工奖励（DX)',
        dataIndex: 'minerRewards',
        key: 'minerRewards',
        width: '20%',
        align: 'right',
        render: (text, record, index) => {
            return (
                <span key={record.id}>
                    {
                        currency(record.minerRewards)
                    }
                </span>
            )
        }
    },
    {
        title: '自己总奖励（DX)',
        dataIndex: 'ownRewards',
        key: 'ownRewards',
        width: '20%',
        align: 'right',
        render: (text, record, index) => {
            return (
                <span key={record.id}>
                    {
                        currency(record.ownRewards)
                    }
                </span>
            )
        }
    },
]
const { TabPane } = Tabs;
const Votingrewards = ({ ...props }) => {
    const [depsValue, setdepsValue] = useState('a');
    const { state, toggle, setTrue, setFalse } = useBoolean(true);
    useEffect(() => {
    }, [])
    const { data, error, loading } = useRequest(querysomething)
    return <div>
        <Spin spinning={loading}>
            <Card bordered={true} style={{ marginBottom: 32 }}>
                <Descriptions layout="vertical" title="" style={{ marginBottom: 32 }}>
                    <Descriptions.Item label="累计出块(DX)">{currency(200000000, true)}</Descriptions.Item>
                    <Descriptions.Item label="节点自身分配(DX)">{currency(100000000, true)}</Descriptions.Item>
                    <Descriptions.Item label="存储矿工已分配(DX)">{currency(100000000, true)}</Descriptions.Item>
                    <Descriptions.Item label="存储矿工未分配(DX)">{currency(100000000, true)}</Descriptions.Item>
                </Descriptions>
            </Card>
        </Spin>
        <Card bordered={true} title='周期奖励详情'>
            <HooksTable deps={[depsValue]} depsProps={{ depsValue }} usePagination={true} columns={columns} api='/api/supernode/reward' method='POST' />
        </Card>
    </div >


}
export default Votingrewards;