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
const Myminer = ({ ...props }) => {
    const [type, setType] = useState('transaction');
    const { state, toggle, setTrue, setFalse } = useBoolean(true);
    const { data, error, loading } = useRequest(querysomething, {
        formatResult: (response) => {
            console.log('res', response)
            return response.data.list
        }
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
        <Card bordered={false} style={{ marginBottom: 32 }}>
            <Spin spinning={loading}>
                <div className={styles.myminebody}>
                    {
                        data && data.length > 0 && data.map((item, index) => {
                            return (
                                <div className={`${styles.mymine} ${styles.fl}`} key={item.sn}>
                                    <p className={styles.serialname}>序列号:
                                        {
                                            (item.voteCancelStatus)
                                        }
                                    </p>
                                    {/* <p className="serialnum">{item.sn.slice(0, 4) + '' + item.sn.slice(4, 8) + '' + item.sn.slice(8, 12) + '' + item.sn.slice(12, 16) + '' + item.sn.slice(16, 20)}</p> */}
                                    <p className={styles.serialnum}>{strInsert(item.sn, 5)}</p>
                                    <Row>
                                        <Col span={24}>
                                            <p className={styles.minename}>矿机余额(DX)</p>
                                            <p className={styles.minenum}>{currency(item.totalBalance)}</p>
                                        </Col>
                                        <Col span={24}>
                                            <p className={styles.minename}>剩余的投票额度</p>
                                            <p className={styles.minenum}>{currency(item.remainVoteQuota)}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <Button disabled={item.dxAddress === null} type='primary' className={styles.minebtn}>转入</Button>
                                        </Col>
                                        <Col span={8}>
                                            <Button disabled={item.dxAddress === null} className={styles.minebtn}>转出</Button>
                                        </Col>
                                        <Col span={8}>
                                            <Button className={styles.minebtn} onClick={() => {
                                                props.history.push(`/minedetails?sn=${item.sn}`)
                                            }}>矿机详情</Button>
                                        </Col>
                                    </Row>
                                    {
                                        item.dxAddress === null ? <span className={styles.minedxAddress}>*暂无主网地址,请到矿机详情生成主网地址</span> : null
                                    }
                                </div>
                            )
                        })
                    }
                    {/* {
                        data.length === 0 ?
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            : null
                    } */}
                </div>
            </Spin>
        </Card>
    </div >


}
export default Myminer;