import { useRequest } from '@umijs/hooks';
import request from '@/utils/request';
import React, { memo, useCallback, useState, useEffect, useMemo } from "react";
import TimeSearch from '@/components/TimeSearch/index'
import {
    Card,
    Divider,
    Button,
    Table,
    message,
    Modal,
    Form,
    Input,
    Select,
    Row,
    Spin,
    Col,
    Tabs,
    Pagination
} from "antd";
import moment from 'moment';
// import { post, get } from "utils/fetch";
// let baseUrl = "https://shequ.dxchain.com";
// let baseUrl = 'http://192.168.31.118:8081'
// if (process.env.NODE_ENV === "production") {
//     baseUrl = "https://shequ.dxchain.com";
// } else if (process.env.NODE_ENV === "development") {
//     baseUrl = "https://shequ-test.dxchain.com";
//     baseUrl = "http://192.168.31.118:8081";
// }

const dateFormat = 'YYYY-MM-DD';

const HooksTable = (props) => {
    const usePagination = props.usePagination;
    const usetimesearch = props.usetimesearch;
    const bordered = props.bordered;
    const Api = props.api;
    const method = props.method || 'GET';
    const columns = props.columns || []
    const deps = props.deps || []
    const depsProps = props.depsProps || []
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    async function getRule(data) {
        return request(Api, {
            method: method,
            data: {
                ...data,
            },
        });
    }
    const queryListData = (data = {}) => {
        return getRule(data)
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(
        //             {
        //                 code: 200,
        //                 message: "成功",
        //                 data: { total: 2, pageNumber: "1", pageSize: "10", list: [{ name: 'name1', value: 'value1' }, { name: 'name2', value: 'value2' }] }
        //             })
        //     }, 1000)
        // })
    }

    // useEffect(() => {
    //     queryListData();
    // }, [pageConfig.pageIndex, pageConfig.pageSize]);
    // const first =(username) => {
    //     const params = {
    //         pageNumber: pageConfig.pageIndex,
    //         pageSize: pageConfig.pageSize
    //     };
    //     const token = storage.get('uesr') && storage.get('uesr').token
    //     return {
    //         url: `${baseUrl}/${Api.prevotelog}`,
    //         method: 'post',
    //         data: { ...params },
    //         headers: {
    //             common: {
    //                 Authorization: 'Bearer ' + token
    //             }
    //         }
    //     }
    // }
    const setDateValue = (value) => {
        const start = value[0].format(dateFormat)
        const end = value[1].format(dateFormat)
        console.log('start', start)
        console.log('end', start)
        setStart(start);
        setEnd(end);
    }

    const { pagination, tableProps, data, error, loading, params, run, cancel, refresh } = useRequest(
        ({ current, pageSize, sorter: s, filters: f }) => {
            const p = {
                pageNumber: current, pageSize: pageSize,
                // start,end 
            };
            // if (s.field && s.order) {
            //     p[s.field] = s.order;
            // }
            // if (f) {
            //     Object.entries(f).forEach(([filed, value]) => {
            //         p[filed] = value;
            //     });
            // }
            Object.entries(depsProps).forEach(([filed, value]) => {
                p[filed] = value;
            });
            return queryListData(p)
            // return request(p)
        },
        {
            // manual: true,
            // pollingInterval:10000,
            formatResult: (res) => {
                const data = res.data.list || [];
                const total = res.data.total || 0;
                return {
                    list: data,
                    total: total
                }
            },
            loadingDelay: 200,
            pollingWhenHidden: false,
            paginated: true,
            refreshOnWindowFocus: true,
            // cacheKey: 'hooksTable',
            refreshDeps: [start, end, ...deps]
            // pollingInterval:1000
            // defaultPageSize: 5
        }
    )
    // {requestMethod: (param) => post(Api.prevotelog)}
    console.log('data', data, 'error', error)
    if (error) {
        return <div>failed to load</div>
    }
    // if (loading) {
    //     return <div>loading...</div>
    // }
    return <div>
        {/* <Button onClick={()=>run(params)}>
            goRequesthooks
        </Button> */}
        {usetimesearch ? < TimeSearch sentData={setDateValue} /> : null}
        <div style={{ marginTop: '20px' }} />
        {/* <Spin tip="Loading..." spinning={loading}> */}
        <Table
            bordered={bordered}
            rowKey={record => record.id}
            scroll={
                window.document.body.offsetWidth < 1200 ?
                    { x: true } : { x: true }
            } columns={columns} rowKey="id" {...tableProps} pagination={false} />
        {usePagination ? <Pagination
            {...pagination}
            showQuickJumper
            showSizeChanger
            onShowSizeChange={pagination.onChange}
            style={{ marginTop: 16, textAlign: 'right' }}
        /> : null
        }
        {/* </Spin> */}
    </div>
}
export default HooksTable