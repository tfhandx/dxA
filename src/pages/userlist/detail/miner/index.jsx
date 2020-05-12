import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { Prompt } from 'umi';
import { Button, Descriptions, Card, Spin, Tabs } from 'antd'
import Myminer from './components/Myminer/index'
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
            <PageHeaderWrapper extra={[
                <Button type='primary' disabled>
                    批量投票
        </Button>]} />
            <Spin spinning={loading}>
                <Card bordered={true} style={{ marginBottom: 32 }}>
                    <Descriptions layout="vertical" title="" style={{ marginBottom: 32 }}>
                        <Descriptions.Item label="矿机总余额">{currency(200000000)}</Descriptions.Item>
                        <Descriptions.Item label="投票质押金额">{currency(100000000)}</Descriptions.Item>
                        <Descriptions.Item label="可用余额">{currency(100000000)}</Descriptions.Item>
                    </Descriptions>
                </Card>
            </Spin>
            <Tabs className=""
                defaultActiveKey='1'
                style={{ marginBottom: 40 }}>
                <TabPane tab='我的矿机' key='1'>
                    <Myminer />
                </TabPane>
                <TabPane tab='投票奖励' key='2'>
                    {/* <MyAssets /> */}
                    {/* <ProfitPledge /> */}
                    投票奖励
                </TabPane>

                {/* <TabPane tab='资产详情' key='2'>
            <AssetsPledge />
          </TabPane> */}
                <TabPane tab='我的投票' key='3'>
                    我的投票
                    {/* <VoteResult voteFlag={voteFlag} resultFlag={resultFlag}></VoteResult> */}
                </TabPane>
                <TabPane tab='转账记录' key='4'>
                    {/* <VoteResult voteFlag={voteFlag} resultFlag={resultFlag}></VoteResult> */}
                    <Tabs className=""
                        defaultActiveKey='1'
                        type="card"
                        style={{ marginBottom: 40 }}>
                        <TabPane tab='转入' key='1'>
                            转入
                            {/* <HooksTable depsProps={{ type: secondActiveKey }} deps={[secondActiveKey]} usePagination={true} api={`${Api.minnerDeposit}`} columns={columns} /> */}
                        </TabPane>
                        <TabPane tab='转出' key='2'>
                            转出
                            {/* <HooksTable depsProps={{ type: secondActiveKey }} deps={[secondActiveKey]} usePagination={true} api={`${Api.minnerWithdraw}`} columns={columns} /> */}
                        </TabPane>
                    </Tabs>
                </TabPane>
            </Tabs>
        </Card>
    </div >


}
export default MinerDetail;