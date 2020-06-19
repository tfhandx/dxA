import React, { useEffect, useRef, } from 'react';
import ReactDOM from 'react-dom';
import { history } from 'umi';
import { Button } from 'antd'
import styles from './index.less';

const subroot = document.getElementById('subroot');
const root = document.getElementById('root');
const el = React.createRef()
el.current = document.createElement('div')
const MinerDetail = ({ ...props }) => {
    useEffect(() => {
        subroot.appendChild(el.current)
        subroot.style.display = 'block'
        return () => {
            subroot.removeChild(el.current);
            subroot.style.display = 'none'
        }
    }, [])
    return <iframe
        src="http://localhost:8080/detailed?key=pledge"
        frameBorder="0"
        scrolling='auto'
        name='shequ'
        width='100%'
        style={{ height: '100vh' }}
     />
    // return ReactDOM.createPortal(
    //     <div height='100vh' className={styles.iframe} >
    //         <div className={styles.close}>
    //             <Button onClick={() => {
    //                 subroot.style.display = 'none';
    //                 history.goBack();
    //                 history.push({
    //                     pathname: '/userlist/detail/basic',
    //                     query: {
    //                         a: 'b',
    //                     },
    //                 });
    //             }}>x</Button>
    //         </div>
    //         <iframe
    //             src="http://localhost:8080/detailed?key=pledge"
    //             frameborder="0"
    //             scrolling='auto'
    //             name='shequ'
    //             width='100%'
    //             style={{ height: '100vh' }}
    //         ></iframe>
    //     </div>,
    //     el.current
    // );
}
export default MinerDetail;