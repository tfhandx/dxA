import { observable, action, runInAction } from 'mobx'
import { post, get } from '@/utils/fetch'
import Api from '@/api/api'
import { message } from 'antd'
import storage from '@/utils/storage'

class Stores {
  @observable data = {
    uid: '',
    nickName: '',
    deposit: 0,
    rewardRatio: 0,
    manifesto: '',
    reviewStatus: '',
    reviewTime: '',
    chkBalance: 0,
    reviewOpinion: null,
    reviewStatus: '30'
  }

  @observable orderId = ''

  @observable loading = false

  @action('查询DX金额') fetchData = async function (uid) {
    this.loading = true
    const params = {
      uuid: uid
    }
    this.orderId = uid
    const res = await get(Api.candidateGet, params)
    if (res.data.code === 200) {
      runInAction(() => {
        this.data = res.data.data
        this.loading = false
      })
    }
  }

  @action('查询DX金额') subData = async function (params) {
    this.loading = true
    const data = {
      ...params,
      uid: this.data.uid,
      nickName: this.data.nickName,
      orderId: this.orderId
    }

    const res = await post(Api.candidateCommit, data)
    if (res.data.code === 200) {
      runInAction(() => {
        // message.success('操作成功')
        this.loading = false
      })
    }
    return res
  }

  @action('重置参数') setData = async function () {
    this.data = {
      uid: '',
      nickName: '',
      deposit: 0,
      rewardRatio: 0,
      manifesto: '',
      reviewStatus: '',
      reviewTime: '',
      chkBalance: 0
    }
  }
}

export default new Stores()