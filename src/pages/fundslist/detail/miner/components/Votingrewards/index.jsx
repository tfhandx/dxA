import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { Button, Descriptions, Card, Spin, Tabs, Divider } from 'antd'
import { strInsert } from '@/utils/utils'
import HooksTable from '@/components/hooksTable/index'
import { querysomething } from './service'
import styles from './index.less';

const columns = [
    {
        title: '矿机序列号',
        dataIndex: 'sn',
        key: 'sn',
        width: '35%',
        render: (text, record, index) => {
            return (
                <span key={record.id}>
                    {/* {record.sn.slice(0, 4) + '-' + record.sn.slice(4, 8) + '-' + record.sn.slice(8, 12) + '-' + record.sn.slice(12, 16) + '-' + record.sn.slice(16, 20)} */}
                    {strInsert(record.sn, 5)}
                </span>
            )
        }
        // align:'center',
        //   render:(value, row, index)=>{
        //     const obj = {
        //         children:value,
        //         props:{}
        //     }
        //     //判断maxRank(后台返回相同内容出现的次数)的次数
        //     if(row.maxRank>0){
        //         obj.props.rowSpan = row.maxRank
        //     }else{
        //         obj.props.rowSpan = 0
        //     }
        //     return obj      
        // }
    },
    {
        title: '节点名称',
        dataIndex: 'superNode',
        key: 'superNode',
        align: 'center'
    },
    {
        title: '总收益（DX)',
        dataIndex: 'totalRewards',
        key: 'totalRewards',
        align: 'right',
        render: (text, record, index) => {
            return (
                <span key={record.id}>
                    {
                        currency(record.totalRewards)
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
            <Card bordered style={{ marginBottom: 32 }}>
                <Descriptions layout="vertical" title="" style={{ marginBottom: 32 }}>
                    <Descriptions.Item label="获得总奖励(DX)">{currency(200000000, true)}</Descriptions.Item>
                    <Descriptions.Item label="待分配奖励(DX)">{currency(100000000, true)}</Descriptions.Item>
                    <Descriptions.Item label="已分配奖励(DX)">{currency(100000000, true)}</Descriptions.Item>
                </Descriptions>
            </Card>
        </Spin>
        <HooksTable deps={[depsValue]} depsProps={{ depsValue }} usePagination columns={columns} api='/api/miner/rewardlist' method='POST' />
    </div >


}
export default Votingrewards;