import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { Button, Descriptions, Card, Spin, Divider } from 'antd'
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
        width: '20%',
    },
    {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        width: '20%',
    },
    {
        title: '状态',
        dataIndex: 'status',
        width: '20%',
        key: 'status',
        render: (text, record, index) => {
            return (
                <span key={record.id}>
                    {
                        record.status === 0 ? '候选节点' : '出块节点'
                    }
                </span>
            )
        }
    },
    {
        title: '出块总数',
        dataIndex: 'blocks',
        key: 'blocks',
        width: '20%',
    },
    {
        title: '所得块奖励（DX)',
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
]
const Voteresult = ({ ...props }) => {
    const [depsValue, setdepsValue] = useState('a');
    return <div>
        <Card bordered={true}>
            <HooksTable deps={[depsValue]} depsProps={{ depsValue }} usePagination={true} columns={columns} api='/api/supernode/election' />
        </Card>
    </div >


}
export default Voteresult;