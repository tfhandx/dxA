import React, { Component } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import './style.less'

const Goback = (props) => {
  const gobackClick = () => {
    history.goBack()
  }


  const { extraElement = <span /> } = props
  return (
    <div className="goback">
      <div className="detailed-goback">
        <span onClick={gobackClick}>
          <i style={{ fontSize: 16 }} className={['iconfont', 'icon-left-copy'].join(' ')} />
          <span style={{ paddingLeft: 10 }}>返回上一级</span>
        </span>
        {extraElement}
      </div>
    </div>
  )
}

export default Goback