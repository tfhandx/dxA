import { observable, action, runInAction } from 'mobx'
import { post } from '@/utils/fetch'
import Api from '@/api/api'
import storage from '@/utils/storage'
import { message } from 'antd'

class Stores {

  @observable noticeList = []

  @observable loading = false

  @observable pageInfo = {
    pageIndex: 1,
    pageSize: 10,
    total: 0
  }

  @observable categoryType = null

  @observable checked = null

  @action('查询公告') queryAnnounce = async function (type, category) {
    this.loading = true
    const params = {
      data: {
        type,
        category,
        pageNumber: this.pageInfo.pageIndex,
        pageSize: this.pageInfo.pageSize
      },
    }
    if (type === 1) {
      params.data.status = this.checked
    }
    const res = await post(Api.announceGet, params)
    if (res.data.code === 200) {
      runInAction(() => {
        this.noticeList = res.data.data.list
        this.pageInfo = {
          pageIndex: res.data.data.pageNumber,
          pageSize: res.data.data.pageSize,
          total: res.data.data.total,
        }
        this.loading = false
      })
    } else {
      this.noticeList = []
      this.loading = false
      this.pageInfo = {
        pageIndex: 1,
        pageSize: 10,
        total: 0
      }
    }
  }

  @action('tabs切换') tabsChange = async function (type, category) {
    this.categoryType = category
    this.pageInfo = {
      pageIndex: 1,
      pageSize: 10,
      total: 0
    }
    this.queryAnnounce(type, category)
  }

  @action('列表切换') onShowSizeChange = async function (current, size, type) {
    this.pageInfo = {
      pageIndex: current,
      pageSize: size,
      total: this.pageInfo.total
    }
    this.queryAnnounce(type, this.categoryType)
  }

  @action('删除列表') delList = async function (id, type) {
    const params = {
      data: {
        id,
      },
    }
    const res = await post(Api.announceDelete, params)
    if (res.data.code === 200) {
      runInAction(() => {
        this.queryAnnounce(type, this.categoryType)
      })
    }
  }

  @action('草稿') checkboxChange = async function (checked, type) {
    this.checked = checked ? 0 : null
    this.pageInfo = {
      pageIndex: 1,
      pageSize: 10,
      total: 0
    }
    this.queryAnnounce(type, this.categoryType)
  }

  @action('重置参数') setData = async function () {
    // this.noticeList = []
    this.loading = false
    this.pageInfo = {
      pageIndex: 1,
      pageSize: 10,
      total: 0
    }
    this.categoryType = null
    this.checked = null
  }
}

export default new Stores()