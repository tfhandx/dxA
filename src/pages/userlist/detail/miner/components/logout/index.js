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

const typeName = (type) => {
    switch (type) {
        case -1: return '---'; break;
        case 0: return '已提交'; break;
        case 1: return '进行中'; break;
        case 2: return '审核中'; break;
        case 3: return '成功'; break;
        case 4: return '失败'; break;
        case 5: return '已取消'; break;
        case 6: return '超时'; break;
        default: return '--'
    }
}
const columns = [
    {
        title: "发送方",
        dataIndex: "from",
        key: "from",
        align: "center"
        // render: (text, record, index) => {
        //     return <div className="spanWrapper"> <span className="normalSort">{text}</span></div>
        // }
    },
    {
        title: "接收方",
        dataIndex: "to",
        key: "to",
        align: "center",
        render: (text, record, index) => {
            return text
        }
    },
    {
        title: "金额",
        dataIndex: "amount",
        key: "mount",
        align: "right"
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        render: (text, record, index) => {
            return typeName(text)
        }
    },
    {
        title: "时间",
        dataIndex: "time",
        key: "time",
        align: "center"
    }
];
const Tlogout = ({ ...props }) => {
    const [depsValue, setdepsValue] = useState('a');
    return <div>
        <Card bordered>
            <HooksTable deps={[depsValue]} depsProps={{ depsValue }} usePagination columns={columns} api='/api/miner/withdraw-order' />
        </Card>
    </div >


}
export default Tlogout;