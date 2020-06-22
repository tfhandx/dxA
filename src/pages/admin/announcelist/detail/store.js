import { observable, action, useStrict, runInAction, computed } from 'mobx'
import { get, post, del } from '@/utils/fetch'
import React from 'react'
import Api from '@/api/api'
import { message } from 'antd'
import storage from '@/utils/storage'

class Stores {

  @observable areaCode = {
    title: '',
    summary: '',
    publishTime: '',
    content: ''
  } // 列表的loading

  @action('方法描述') detailsQuery = async function (id, type) {
    const params = {
      data: {
        type,
        id,
      },
    }
    const res = await post(Api.announceGetOne, params)
    if (res.data.code === 200) {
      runInAction(() => {
        this.areaCode = res.data.data
      })
    }
  }

  @action('方法描述') detailsPreview = async function () {
    this.areaCode = {
      title: '',
      summary: '',
      publishTime: '',
      content: ''
    }
  }

}

export default new Stores()