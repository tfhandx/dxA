import React from 'react';
import styles from './index.less'
const MinerDetail = ({ ...props }) => {
    return <div height='100vh' className={styles.iframe}>
        <iframe
            src="https://www.baidu.com/"
            frameborder="0"
            scrolling='auto'
            name='shequ'
            width='100%'
            style={{ height: '100vh' }}
        ></iframe>
    </div>
}
export default MinerDetail;