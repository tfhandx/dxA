import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import useViewport from '@/components/useViewport/index.jsx'
import DxDialog from '@/components/dialog/index.js'
import styles from './index.less'

const MobileSearch = () => {
    const [numbers, setNums] = useState([]);
    useEffect(() => {
        const numbers = []
        for (let i = 0; i < 100; i++) {
            numbers.push(i)
        }
        setNums(numbers);
        return () => {

        };
    }, []);
    const { width, height, isIframe } = useViewport()
    return <div>
        <div>{width}{height}</div>
        <div>
            <DxDialog />
        </div>
        {numbers.map((item) => {
            return <li className={styles.li} key={`${item}`}>
                {`listMoblie${item}`}
            </li>
        })}
    </div>

}
export default MobileSearch;