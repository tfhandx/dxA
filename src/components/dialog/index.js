import React, { useEffect, useState } from 'react'
import { Button, Carousel, Divider } from 'antd'
import useViewport from '@/components/useViewport/index.jsx'
import styles from './index.less'
const DxDialog = () => {
    const [showBottom, setShowBottom] = useState(false)
    const { width, height, isIframe } = useViewport()
    const opendialog = (e) => {
        e.stopPropagation();
        console.log('e.target', e.target)
        setShowBottom(true)
    }
    const closedialog = (e) => {
        console.log('e.target', e.target)
        setShowBottom(false)
    }

    return <>
        {/* <Button onClick={opendialog} className='button'>
            open
    </Button> */}
        <div className={styles.newsWraper} >
            <div className={styles.leftNews}>
                <span>周末大事件</span>
            </div>
            <Divider type="vertical" />
            <div
                className={styles.carousel}
            >
                <Carousel
                    dotPosition={'right'}
                    autoplay
                    dots={false}
                >
                    {['1', '2', '3', '4', '5'].map((item) => {
                        return (<div className={styles.carouselItem} >
                            <h3 className={styles.h3tag}>{item}</h3>
                            <div>
                                <div>title</div>
                                <div>content</div>
                            </div>
                        </div>)
                    })}
                </Carousel>
            </div>
            <Divider type="vertical" />
            <div className={styles.rightNews}>
                <span>查看详情</span>
            </div>
        </div>
        {/* <div className={`${styles.dialogwrapper}  ${showBottom ? styles.show : styles.hidden}`}
        onClick={closedialog}
        >
            <div className={`${styles.footerFix}  ${showBottom ? styles.show : styles.hidden}`} style={{ width: width * 0.4 }}>
                < span className="close" onClick={() => setShowBottom(false)}>X</span>
            </div>
        </div> */}
    </>

}
export default DxDialog;