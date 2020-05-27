import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { Prompt } from 'umi';
import { Button, Descriptions, Card, Spin, Tabs } from 'antd'
import VoteNumber from './components/voteNumber/index'
import Votingrewards from './components/Votingrewards/index'
import Voteresult from './components/Voteresult/index'
import Tlogin from './components/login/index'
import Tlogout from './components/logout/index'
import { querysomething } from './service'
import styles from './index.less';
const { TabPane } = Tabs;
const MinerDetail = ({ ...props }) => {
    const { location: { query: { id: uid } } } = props
    const [type, setType] = useState('transaction');
    const { state, toggle, setTrue, setFalse } = useBoolean(true);
    useEffect(() => {
        setType(history.location.query.id)
        console.log('uid', uid)
    }, [uid])
    const { data, error, loading } = useRequest(querysomething)
    console.log('history.location.query.id', history.location.query.id)
    return <div>
        <Card bordered={false} style={{ marginBottom: 32 }}>
            <PageHeaderWrapper extra={[]} />
            <Spin spinning={loading}>
                <Card bordered={false}>
                    <Descriptions bordered={true} layout="vertical" title="" style={{ marginBottom: 32 }}>
                        <Descriptions.Item label="节点总资产(DX)">{currency(200000000, true)}</Descriptions.Item>
                        <Descriptions.Item label="节点质押金额(DX)">{currency(100000000, true)}</Descriptions.Item>
                        <Descriptions.Item label="节点可用余额(DX)">{currency(100000000, true)}</Descriptions.Item>
                    </Descriptions>
                </Card>
            </Spin>
            <Tabs className=""
                defaultActiveKey='1'
                style={{ marginBottom: 40 }}>
                <TabPane tab='出块奖励' key='1'>
                    <Votingrewards></Votingrewards>
                </TabPane>
                <TabPane tab='得票数' key='2'>
                    <VoteNumber />
                </TabPane>

                {/* <TabPane tab='资产详情' key='2'>
            <AssetsPledge />
          </TabPane> */}
                <TabPane tab='周期选举结果' key='3'>
                    <Voteresult />
                </TabPane>
            </Tabs>
        </Card>
    </div >


}
export default MinerDetail;