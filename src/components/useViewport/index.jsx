import React, { useContext, useState, useEffect } from 'react'

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [isIframe, setIsIframe] = useState(false);
    useEffect(() => {
        console.log(window.name, 'window.name')
        if (window.name === 'shequ') {
            console.log(window.name, 'window.name')
            setIsIframe(true)
        }
        else {
            setIsIframe(false)
        }
    }, []);

    // console.log('window.name1', window.name, 'window.top.location.host', window.top.location.host, 'window.location.host', window.location.host)
    // location.href = window.location.href;
    // useEffect(() => {
    //     if ((window.top.location.host !== window.location.host) && (window.name !== 'shequ')) {
    //         console.log('???')
    //         window.top.location.href = window.location.href;
    //     }
    // }, []);
    useEffect(() => {
        const docEl = document.documentElement;
        const {clientWidth} = docEl;
        if (!clientWidth) return;
        if (clientWidth >= 750) {
            docEl.style.fontSize = '100px';
        } else {
            docEl.style.fontSize = `${100 * (clientWidth / 750)  }px`;
            console.log(' docEl.style.fontSize', docEl.style.fontSize)
            // 如果是苹果五为设计图则换为640
        }
        const resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize';
        const handleFun = () => {
            console.log(' docEl.style.fontSize', docEl.style.fontSize)
            // var docEl = document.documentElement;
            // var clientWidth = docEl.clientWidth;
            setWidth(window.clientWidth)
            setHeight(window.clientHeight)
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = `${100 * (clientWidth / 750)  }px`;
                console.log(' docEl.style.fontSize', docEl.style.fontSize)
                // 如果是苹果五为设计图则换为640
            }
        }
        if (!document.addEventListener) return;
        window.addEventListener(resizeEvt, handleFun, false);
        document.addEventListener('DOMContentLoaded', handleFun, false);
        return () => {
            window.removeEventListener(resizeEvt, handleFun, false)
            document.removeEventListener('DOMContentLoaded', handleFun, false);
        }

    }, [document.documentElement.clientWidth])
    return <viewportContext.Provider value={{ width, height, isIframe }}>
        {children}
    </viewportContext.Provider>
}
const useViewport = () => {
    const { width, height, isIframe } = useContext(viewportContext);
    return { width, height, isIframe }
}
useViewport.ViewportProvider = ViewportProvider;
export default useViewport