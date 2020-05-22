import React, { Component, Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';

const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));



cosnt Items = () => {
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