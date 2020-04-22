import React from 'react'
import { SchemaForm, SchemaMarkupField as Field, FormButtonGroup, Submit, Reset } from '@formily/antd'
import { Input } from '@formily/antd-components'
import styles from './index.less'
import 'antd/dist/antd.css'
const Formily = ({ ...props }) => {
    return <div className={styles.wrapper}>
        {/* formily example */}
        <div>
            <SchemaForm
                components={{ Input }}
                onSubmit={values => {
                    console.log('values:', values)
                }}
            >
                <Field
                    type='string'
                    name='name'
                    title='name'
                    x-component='Input'
                >

                </Field>
                <FormButtonGroup>
                    <Submit>提交</Submit>
                    <Reset>重置</Reset>

                </FormButtonGroup>

            </SchemaForm>
        </div>
    </div>
}
export default Formily