import React, { Component, Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import PageLoading from './components/PageLoading';
import styles from './style.less';

const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));



const DashboardItems = () => {
    return (
        <GridContent>
            <React.Fragment>
                <Suspense fallback={<PageLoading />}>
                    <IntroduceRow loading={false} visitData={[]} />
                </Suspense>
            </React.Fragment>
        </GridContent >
    )
}
export default DashboardItems