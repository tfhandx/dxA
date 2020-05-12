import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { Button, Descriptions, Card, Spin, Tabs } from 'antd'
import { querysomething } from './service'
import styles from './index.less';
const { TabPane } = Tabs;
const Template = ({ ...props }) => {
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
        </Card>
    </div >


}
export default Template;