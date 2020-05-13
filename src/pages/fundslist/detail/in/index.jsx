import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { Prompt } from 'umi';
import { Button, Descriptions, Card, Spin, Tabs } from 'antd'
import Savinglog from './components/login/index'
import { querysomething } from './service'
import styles from './index.less';
const { TabPane } = Tabs;
const SavingDetail = ({ ...props }) => {
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
        <Card bordered={false} >
            <PageHeaderWrapper />
            <Spin spinning={loading}>
                <Card bordered={true}>
                    <Descriptions layout="vertical" title="" style={{ marginBottom: 32 }}>
                        <Descriptions.Item label="现金账户余额(DX)">{currency(200000000, true)}</Descriptions.Item>
                    </Descriptions>
                </Card>
            </Spin>
            <Savinglog />
        </Card>
    </div >


}
export default SavingDetail;