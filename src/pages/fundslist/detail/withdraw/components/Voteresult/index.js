import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { Button, Descriptions, Card, Spin, Divider } from 'antd'
import { strInsert } from '@/utils/utils'
import HooksTable from '@/components/hooksTable/index'
import { querysomething } from './service'
import styles from './index.less';

const columns = [
    {
        title: '矿机序列号',
        dataIndex: 'sn',
        key: 'sn',
        align: 'center',
        render: (text, record, index) => {
            return <span style={{ wordBreak: 'keep-all' }}>{strInsert(text, 5)}</span>
        }
    },
    {
        title: "节点名称",
        dataIndex: "superNode",
        key: "superNode",
        align: "center",
        render: (superNode, record, index) => {
            const nodesElements = <ul style={{ marginBottom: '0px' }}>
                {
                    (Array.isArray(superNode) && superNode.length > 0) ?
                        superNode.map((item, i) => {
                            return <li key={`${item}-${i}`} style={{ wordBreak: 'keep-all' }}>
                                {/* <Link to={`delegateDetail?uid=${record.candidateUid}`}> */}
                                {item}
                                {/* </Link> */}
                            </li>
                        }) :
                        "暂无投票节点"
                }
            </ul>

            return nodesElements
        }
    },
    {
        title: "投票数量",
        dataIndex: "votes",
        key: "votes",
        align: "right",
        render: (text, record, index) => {
            return currency(text, false, 2);
        }
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        render: (text, record, index) => {
            return text ? '已完成' : '未完成'
        }
    },
    {
        title: "时间",
        dataIndex: "time",
        key: "time",
        align: "center"
    },
    {
        title: <div>
            <Button className="exitAll"
                disabled
            > 全部取消</Button>
        </div>,
        dataIndex: "",
        key: "",
        align: "center",
        render: (text, record) => {
            return (
                <span>
                    <Button
                        disabled
                        type="danger"
                    >
                        取消
              </Button>
                    {/* <VoteModal style={{marginLeft:'10px'}} dataSourceCurrent={dataSourceCurrent} queryListDataCurrent={queryListDataCurrent}>
                <Button >
                  修改
                </Button>
              </VoteModal> */}
                </span>
            );
        }
    }
];
const Voteresult = ({ ...props }) => {
    const [depsValue, setdepsValue] = useState('a');
    return <div>
        <Card bordered>
            <HooksTable deps={[depsValue]} depsProps={{ depsValue }} usePagination columns={columns} api='/api/miner/voteresult' method='POST' />
        </Card>
    </div >


}
export default Voteresult;