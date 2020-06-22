import { useRequest } from '@umijs/hooks';
import request from '@/utils/request';
import React, { memo, useCallback, useState, useEffect, useMemo } from "react";
import {
    Card,
    Divider,
    Button,
    Table,
    message,
    Modal,
    Form,
    // Input,
    Select,
    Row,
    Spin,
    Col,
    Tabs,
} from "antd";
import {
    SchemaForm,
    SchemaMarkupField as Field,
    useFormTableQuery,
    FormButtonGroup,
    Submit,
    Reset
} from '@formily/antd' // 或者 @formily/next
import { Input } from '@formily/antd-components'
// 或者@formily/next-components
import moment from 'moment';
import 'antd/dist/antd.css'

const dateFormat = 'YYYY-MM-DD';

const FormTableQuery = (props) => {
    const {bordered} = props;
    const Api = props.api;
    const method = props.method || 'GET';
    const columns = props.columns || []
    const deps = props.deps || []
    const depsProps = props.depsProps || []
    async function queryListData(data = {}) {
        // const Api = 'https://randomuser.me/api';
        return request(Api, {
            method,
            data: {
                ...data,
            },
        });
    }
    const SubmitedPlugin = () => ({ context }) => ({
        onFormDidQuery(payload, next) {
            return next({
                dataSource: payload.data.list,
                // pageSize: payload.data.pageSize,
                ...context.pagination,
                // total: payload.info.results,
                // total: payload.data.total,
                total: 18,
            })
        }
    })
    const SubmitResetPlugin = () => ({ context }) => ({
        onFormSubmitQuery(payload, next) {
            context.setPagination({
                ...context.pagination,
                current: 1
            })
            return next(payload)
        }
    })

    const { form, table } = useFormTableQuery(({ values, pagination, sorter = {}, filters = {} }) => {
        const p = {
            pageSize: pagination.pageSize,
            sortField: sorter.field,
            sortOrder: sorter.order,
            pageNumber: pagination.current,
            ...values,
            ...filters
        }
        return queryListData(p).then(data => data)
    }, [SubmitedPlugin(), SubmitResetPlugin()], {
        pagination: {
            pageSize: 5,
            // showSizeChanger,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '30'],
            showQuickJumper: true,
        }
    })
    console.log('table', table)

    return <div>
        <SchemaForm
            {...form}
            components={{ Input }}
            style={{ marginBottom: 20 }}
            inline
        >
            <Field type="string" name="name" title="Name" x-component="Input" />
            <FormButtonGroup>
                <Submit>查询</Submit>
                <Reset>重置</Reset>
            </FormButtonGroup>
        </SchemaForm>
        <Table
            {...table}
            columns={columns}
            rowKey={record => record.id}
        />
    </div>
}
export default FormTableQuery