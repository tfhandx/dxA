import { observable, action, runInAction, flow } from 'mobx'
import { post } from '@/utils/fetch'
import Api from '@/api/api'
import storage from '@/utils/storage'
import { message } from 'antd'

class Stores {

  @observable areaCode = [
    {
      value: '新功能',
      id: 'upgrade'
    },
    {
      value: '活动公告',
      id: 'activity'
    },
  ]
  @observable data = {
  }
  @observable loading = false
  @observable id = ''
  @action('方法描述') formQuery = async function (data, id) {
    this.id = id
    this.data = data
  }

  @action('方法描述') addForm = async function (params) {
    this.loading = true
    let data = {
      data: {
        ...params,
        id: this.id !== '' ? this.id : null
      }
    }
    let url = this.id === '' ? Api.announceAdd : Api.announceUpdate
    let res = await post(url, data)
    if (res.data.code === 200) {
      runInAction(() => {
        if (res.data.data.id) {
          this.id = res.data.data.id
          message.success('操作成功')
        }
      })
      this.loading = false
    }
    return res
  }

  @action('重置参数') setData = async function () {
    this.data = {
    }
    this.loading = false
    this.id = ''
  }
}

export default new Stores()