import React, { Component, useState, useEffect } from 'react'
import './style.less'
import { Spin, Modal, Button, message, Radio, Form } from 'antd';
// import { Form } from '@ant-design/compatible';
import { history } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import '@ant-design/compatible/assets/index.css';
import request from '@/utils/request';
import { useRequest } from '@umijs/hooks';
import Goback from '@/components/Goback/index'
import Input from '@/components/dxinput/index'
import { currency } from '@/utils/number'

const FormItem = Form.Item;
const RadioGroup = Radio.Group
const SQtextarea = Input.TextAreaWithMax

const DetailsVote = (props) => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();
    async function querydetail(data) {
        return request(`/api/review/candidate/get`, {
            method: 'GET',
            params: {
                ...data,
            },
        });
    }
    console.log('history.location.query.id', history.location)
    //获取详情
    const { data: detail = {
        uid: '',
        nickName: '',
        deposit: 0,
        rewardRatio: 0,
        manifesto: '',
        reviewStatus: '',
        reviewTime: '',
        chkBalance: 0,
        reviewOpinion: '',
        reviewStatus: '1'
    }, error: detailerror, loading: detailLoading, params: detailParams, run: detailRun = () => { } } = useRequest(
        () => {
            return querydetail({ uid: history.location.query.uid })
            // return request(p)
        },
        {
            // manual: true,
            // pollingInterval:10000,
            formatResult: (res) => {
                console.log(res, 'res')
                if (res.code === 200) {
                    const detail = res.data
                    form.setFieldsValue({
                        reviewStatus: detail.reviewStatus === 0 ? '1' : detail.reviewStatus + '',
                        reviewOpinion: `${detail.reviewOpinion === null ? '' : detail.reviewOpinion}`
                    })
                    return { ...res.data }
                }
            },
            // loadingDelay: 200,
            pollingWhenHidden: false,
            // paginated: true,
            refreshOnWindowFocus: true,
            // cacheKey: 'hooksTable',
            refreshDeps: [history.location.query.uid]
            // pollingInterval:1000
            // defaultPageSize: 5
        }
    )
    //编辑后提交
    async function subdetail(data) {
        return request(`/api/review/candidate/commit`, {
            method: 'POST',
            data: {
                ...data,
            },
        });
    }
    const { data, error, loading, params, run: subData = () => { }, cancel, refresh } = useRequest(
        (params = {}) => {
            return subdetail(params)
            // return request(p)
        },
        {
            manual: true,
            // pollingInterval:10000,
            formatResult: (res) => {
                console.log(res, 'res')
                if (res.code === 200) {
                    history.push('/admin/verify/list')
                }
            },
            // loadingDelay: 200,
            pollingWhenHidden: false,
            // paginated: true,
            refreshOnWindowFocus: true,
            // cacheKey: 'hooksTable',
            refreshDeps: [history.location.query.uid]
            // pollingInterval:1000
            // defaultPageSize: 5
        }
    )
    console.log('history.location.query.id', detail)
    // useEffect(() => {
    //     if (window.location.href.indexOf('?uid') !== -1) {
    //         fetchData(window.location.href.split('?uid=')[1])
    //     }
    //     return () => {
    //         setData()
    //     };
    // }, [uid]);

    const handleSubmit = (values) => {
        // e.preventDefault()
        // form.validateFields(
        //     async (err, values) => {
        //         if (err) {
        //             return
        //         }
        //         let params = { uid: detail.uid, nickName: detail.nickName, ...values }
        //         subData(params)
        //     }
        // )
        let params = { uid: detail.uid, nickName: detail.nickName, ...values }
        subData(params)
    }
    const { getFieldDecorator } = form;
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    }
    useEffect(() => {
        forceUpdate({});
    }, []);
    return (
        <div className="examinevote-details">
            <PageHeaderWrapper />
            {/* <Goback btt='/examinevote' /> */}
            <div className="details-card">
                <h2>节点名称</h2>
                <div className="details-box">{detail.nickName}{detail.reviewOpinion}</div>
                <h2>DX持仓量</h2>
                <div className="details-box">{currency(detail.chkBalance)}<span className="box-span"></span></div>
                <h2>节点质押数量</h2>
                <div className="details-box">{currency(detail.deposit)}</div>
                <h2>投票奖励分配</h2>
                <div className="details-box"> {
                    `团队${detail.rewardRatio}% 自己${100 - detail.rewardRatio}%`
                }</div>
                <h2>竞选宣言</h2>
                <div className="details-big-box">{detail.manifesto}</div>
                <h2>审核状态</h2>
                <Form
                    form={form}
                    name="control-hooks"
                    // initialValues={{
                    // reviewStatus: detail.reviewStatus === 0 ? '1' : detail.reviewStatus + '',
                    // reviewOpinion: detail.reviewOpinion
                    // reviewOpinion: `${detail.reviewOpinion === null ? '' : detail.reviewOpinion}`
                    // }}
                    onFinish={handleSubmit}
                >
                    <div className="radio-form">
                        <FormItem
                            label="审核结果"
                            {...formItemLayout}
                            labelAlign={'left'}
                            name='reviewStatus'
                        >
                            {/* {getFieldDecorator('reviewStatus', {
                                initialValue: detail.reviewStatus === 0 ? '1' : detail.reviewStatus + ''
                            })( */}
                            <RadioGroup disabled={loading}>
                                <Radio value="1">通过</Radio>
                                <Radio value="2">拒绝</Radio>
                            </RadioGroup>
                            {/* )} */}
                        </FormItem>
                    </div>
                    <FormItem
                        label="审核意见"
                        name='reviewOpinion'
                    // initialValue={detail.reviewOpinion}
                    >
                        {/* {getFieldDecorator('reviewOpinion', {
                            initialValue: detail.reviewOpinion
                        })( */}
                        <SQtextarea maxLength={20} style={{ height: 80 }} size={20} />
                        {/* )} */}
                    </FormItem>



                    <FormItem>
                        <Button
                            type='primary'
                            className="form-button"
                            htmlType='submit'
                            disabled={loading}
                            style={{ marginTop: 28, width: 125, height: 48, marginBottom: 45, float: "right" }}
                        >
                            确定
                  </Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    )
}

export default DetailsVote
