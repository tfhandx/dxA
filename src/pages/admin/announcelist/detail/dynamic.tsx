import React, { Component } from 'react'
import './style.less'
import { Tabs, Form, Icon, Input, Button, Row, Col, Modal } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { history } from 'umi'
import storage from '@/utils/storage'
import { observer } from 'mobx-react'
import store from './store.js'

@observer
class AnnounceDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      goback: false,
      num: 0
    }
  };

  componentDidMount = () => {
    const num = storage.get('user') && storage.get('user').role && storage.get('user').role.indexOf(1) !== -1 ? 1 : 0
    if (window.location.href.indexOf('?id=') !== -1) {
      this.setState({
        id: Number(window.location.href.split('?id=')[1]),
        goback: false,
        num
      }, () => {
        store.detailsQuery(this.state.id, this.state.num)
      })
    } else if (window.location.href.indexOf('?preview') !== -1) {
      const data = storage.get('data')
      store.detailsPreview(data)
      this.setState({
        goback: true
      })
    }
  }

  componentWillUnmount = () => {
    store.detailsPreview()
  }

  goback = () => {
    history.push('/admin/announcelist/list')
  }

  render() {
    const { areaCode } = store
    return (
      <div className="announce-detail">
        <div className="detail-return">
          {
            this.state.goback ? null : <Button onClick={this.goback}>
              <ArrowLeftOutlined />
                                          返回上级
                                        </Button>
          }
        </div>
        <div className="deatil-header">
          <p className="header-tital">{areaCode.title}</p>
          <p className="header-time">{areaCode.publishTime}</p>
        </div>
        {/* <div className="deatil-img">
          <img src={areaCode.coverImageUrl} />
        </div> */}
        <div className="deatil-content">
          <div style={{ width: '100%' }}
            dangerouslySetInnerHTML={{ __html: areaCode.content !== '' ? areaCode.content : '<div></div>' }}
           />
        </div>
      </div>
    )
  }
}

export default AnnounceDetail