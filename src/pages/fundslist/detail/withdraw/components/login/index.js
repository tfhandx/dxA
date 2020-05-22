import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useRequest } from '@umijs/hooks';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currency } from '@/utils/number'
import { Button, Descriptions, Card, Spin, Divider } from 'antd'
import { querysomething } from './service'
import { strInsert } from '@/utils/utils'
import HooksTable from '@/components/hooksTable/index'
import {
    SchemaForm,
    SchemaMarkupField as Field,
    FormButtonGroup,
    Submit,
    Reset
} from '@formily/antd' // 或者 @formily/next
import {
    Input,
    Radio,
    Checkbox,
    Select,
    DatePicker,
    NumberPicker,
    TimePicker,
    Upload,
    Switch,
    Range,
    Transfer,
    Rating,
    FormItemGrid
} from '@formily/antd-components' // 或者@formily/next-components
import 'antd/dist/antd.css'

const components = {
    Input,
    Radio: Radio.Group,
    Checkbox: Checkbox.Group,
    TextArea: Input.TextArea,
    NumberPicker,
    Select,
    Switch,
    DatePicker,
    DateRangePicker: DatePicker.RangePicker,
    YearPicker: DatePicker.YearPicker,
    MonthPicker: DatePicker.MonthPicker,
    WeekPicker: DatePicker.WeekPicker,
    TimePicker,
    TimeRangePicker: TimePicker.RangePicker,
    Upload,
    Range,
    Rating,
    Transfer
}
const getInitialValues = () => {
    return new Promise(reslove => {
        setTimeout(() => {
            reslove({
                daterange: ['2018-12-19', '2018-12-19'],
                string: 'this is string',
                radio: '2',
                checkbox: ['2', '3', '4'],
                textarea:
                    'this is long text.this is long text.this is long text.this is long text.this is long text.',
                rating: 3,
                transfer: [1, 2],
                range: 384,
                date: '2020-02-20',
                month: '2020-08',
                year: '2023',
                time: '22:29:53',
                timerange: ['9:00:00', '18:00:00'],
                week: '2020-9th',
                number: 123,
                boolean: true,
                select: '2'
            })
        }, 1000)
    })
}
import styles from './index.less';
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
        width: '25%',
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
        width: '25%',
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
        width: '25%'
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: '25%',
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
]
const Savinglog = ({ ...props }) => {
    const [initialValues, setIntialValues] = useState({})
    useEffect(() => {
        getInitialValues().then(initialValues => {
            setIntialValues(initialValues)
        })
    }, [])
    // const [depsValue, setdepsValue] = useState({});
    return <div>
        <Card>
            <SchemaForm
                initialValues={initialValues}
                labelCol={5}
                onSubmit={(values) => {
                    console.log('values', values)
                    setIntialValues(values)
                }}
                onChange={(values) => {
                    console.log('values', values)
                    setIntialValues(values)
                }}
                editable={true}
                wrapperCol={19}
                components={components}>
                <FormItemGrid gutter={20}>
                    <Field type="string" title="String" name="string" x-component="Input" />
                    <Field
                        type="string"
                        enum={['1', '2', '3', '4']}
                        title="Radio"
                        name="radio"
                        x-component="Radio"
                    />
                </FormItemGrid>
                <FormItemGrid gutter={20} cols={[12, 12]}>
                    <Field
                        type="string"
                        enum={['1', '2', '3', '4']}
                        title="Select"
                        name="select2"
                        x-component="Select"
                    />
                    <Field
                        type="string"
                        enum={['1', '2', '3', '4']}
                        title="Checkbox 2"
                        name="checkbox"
                        x-component="Checkbox"
                    />
                </FormItemGrid>
                <FormItemGrid gutter={20} cols={[12, 12]}>
                    <Field
                        type="string"
                        enum={['1', '2', '3', '4']}
                        title="Select3"
                        name="select"
                        x-component="Select"
                    />
                    <Field
                        type="string"
                        enum={['1', '2', '3', '4']}
                        title="Checkbox3"
                        name="checkbox"
                        x-component="Checkbox"
                    />
                </FormItemGrid>
                <FormButtonGroup offset={5} style={{ minWidth: 150 }}>
                    <Submit>查询</Submit>
                    <Reset>重置</Reset>
                </FormButtonGroup>
            </SchemaForm>
        </Card>

        <Card bordered={true}>
            <HooksTable usetimesearch={true} deps={[initialValues]} depsProps={initialValues} usePagination={true} columns={columns} api='/api/asset/savings' method='POST' />
        </Card>
    </div >


}
export default Savinglog;