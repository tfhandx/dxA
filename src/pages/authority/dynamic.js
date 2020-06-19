
import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { Button, Descriptions, Card, Spin, Divider } from 'antd'
import { strInsert } from '@/utils/utils'
import FormTableQuery from '@/components/useFormTableQuery/index'
import { querysomething } from './service'
import styles from './index.less';
// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         sorter: true,
//         render: name => `${name.first} ${name.last}`,
//         width: '20%'
//     },
//     {
//         title: 'Gender',
//         dataIndex: 'gender',
//         filters: [
//             { text: 'Male', value: 'male' },
//             { text: 'Female', value: 'female' }
//         ],
//         width: '20%'
//     },
//     {
//         title: 'Email',
//         dataIndex: 'email'
//     }
// ]
const typeName = (type) => {
    switch (type) {
        case 'A': return '空投奖励'; break;
        case 'W': return '称重活动'; break;
        case 'I': return '邀请奖励'; break;
        case 'R': return '注册奖励'; break;
        case 'WD': return '称重充值'; break;
        case 'CK': return '签到奖励'; break;
        case 'ERCD': return 'DX充值'; break;
        case 'ERCW': return 'DX提现'; break;
        case 'C2S': return '划转到储蓄账户'; break;
        case 'S2C': return '从储蓄账户提现'; break;
        case 'PVD': return '投票支出'; break;
        case 'PVC': return '投票收入'; break;
        case 'PVDS': return '预投票质押'; break;
        case 'PVRF': return '预投票赎回'; break;
        case 'M2S': return '从矿机账户划转'; break;
        case 'S2M': return '划转到矿机账户'; break;
        case 'PVFL': return '预投票'; break;
        case 'PVRM': return '预投票退回'; break;
        case 'XT': return '西亭资产导入'; break;
        case 'PVAP': return '预投票追加'; break;
        case 'CK_RCVY': return '系统追回'; break;
        case 'SV_RCVY': return '系统追回'; break;
    }
}
const columns = [
    {
        title: '数量',
        dataIndex: 'amount',
        key: 'amount',
        // align: 'right',
        render: (text, record, index) => {
            return (
                <span key={record.id}>
                    {
                        currency(record.amount)
                    }
                </span>
            )
        }
    },
    {
        title: '类别',
        dataIndex: 'type',
        key: 'type',
        render: (text, record, index) => {
            return (
                <span key={record.id}>
                    {
                        typeName(record.type)
                    }
                </span>
            )
        }
    },
    {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (text, record, index) => {
            return (
                <span key={record.id}>
                    {
                        record.status === 'P' ? '进行中' : '已完成'
                    }
                </span>
            )
        }
    },
    {
        title: '操作',
        dataIndex: 'status',
        key: 'status',
        render: (text, record, index) => {
            return (
                <a key={record.id}>
                    删除
                </a>
            )
        }
    },
]

const Authority = ({ ...props }) => {
    const [depsValue, setdepsValue] = useState('a');
    return <div>
        <PageHeaderWrapper content="" extra={
            [
                <Button style={{ marginRight: 10 }} type="primary" onClick={() => {
                    history.push({
                        pathname: '/authority/create',
                        query: {
                            a: 'b',
                        },
                    });
                }} key="3">新增成员</Button>,
                <Button type="primary" style={{ marginRight: 10 }} key="2">Operation</Button>,
                <Button style={{ marginRight: 10 }} key="1" type="primary">
                    Primary
      </Button>,
                // <DropdownMenu key="more" />,
            ]
        }>
            <Card bordered>
                <FormTableQuery columns={columns} method='POST' api='/api/asset/chk' />
            </Card>
        </PageHeaderWrapper>
    </div >


}
export default Authority;