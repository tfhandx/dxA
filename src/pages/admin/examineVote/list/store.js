import { observable, action, runInAction } from 'mobx'
import { post, get } from '@/utils/fetch'
import Api from '@/api/api'
import { message } from 'antd'

class Stores {

  @observable loading = false // 查询条件

  @observable staffList = []

  @observable type = {}

  @observable subdata = {}

  @action('查询表哥') queryListData = async function () {
    this.staffList = []
    this.loading = true
    const params = {
      ...this.subdata
    }
    if (this.subdata.status && this.subdata.status === 'all') {
      delete params.status
    }

    const res = await get(Api.candidateGetall, params)
    if (res.data.code === 200) {
      runInAction(() => {
        this.loading = false
        this.staffList = res.data.data.list
      })
    } else if (res.data && res.data.code === 201) {
      this.loading = false
    }
  }

  @action('查询表哥') subOline = async function (value) {
    this.loading = true
    const params = {
      ...value
    }

    const res = await post(Api.candidateOnline, params)
    if (res.data.code === 200) {
      runInAction(() => {
        message.success('操作成功')
        this.queryListData()
      })
    } else {
      message.error(res.data.message)
    }
  }

  @action('tab切换') tabChange = async (value) => {
    this.subdata = value
    this.queryListData()
  }

  @action('重置') sentData = async (value) => {
    this.loading = false // 查询条件
    this.staffList = []
    this.type = 'all'
    this.subdata = {}
  }
}

export default new Stores()