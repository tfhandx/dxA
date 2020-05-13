import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { strInsert } from '@/utils/utils'
import { Button, Descriptions, Card, Spin, Tabs, Empty, Row, Col } from 'antd'
import { querysomething } from './service'
import styles from './index.less';
// import './index.less'
const { TabPane } = Tabs;
const VoteNumber = ({ ...props }) => {
    const [type, setType] = useState('transaction');
    const { state, toggle, setTrue, setFalse } = useBoolean(true);
    const { data, error, loading } = useRequest(querysomething, {
        formatResult: (response) => {
            console.log('res', response)
            return response.data.list
        },
        refreshOnWindowFocus: true,
        focusTimespan: 5000,
        // refreshDeps:[]
        // cacheKey: 'get/api/miner/getall'
    })
    const voteCancel = (type) => {
        switch (type) {
            case 0: return null; break;
            case 2: return <span className="mineback" style={{ background: '#E02020' }}>已取消投票</span>; break;
            case 1: return <span className="mineback" style={{ background: '#F9B82E' }}>取消投票进行中</span>; break;
        }
    }
    console.log('history.location.query.id', history.location.query.id)
    return <div>
        <Spin spinning={loading}>
            <Card bordered={false}>
                <Descriptions layout="vertical" title="" style={{ marginBottom: 32 }}>
                    <Descriptions.Item label="得票总数(DX)">{currency(200000000, true)}</Descriptions.Item>
                    <Descriptions.Item label="得票率(DX)">{currency(100000000, true)}</Descriptions.Item>
                    <Descriptions.Item label="当前排名(DX)">{currency(100000000, true)}</Descriptions.Item>
                </Descriptions>
            </Card>
        </Spin>
    </div >


}
export default VoteNumber;