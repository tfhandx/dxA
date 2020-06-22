import axios from 'axios'
import React from 'react'
import querystring from 'querystring'
import storage from '@/utils/storage'
import { Modal } from 'antd'
import { history } from 'umi'
import { baseUrl, offerUrl } from './index'

function getPageQuery() {
  return querystring.parse(window.location.href.split('?')[1]);
}
const fetcher = axios.create({
  method: 'post',
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Content-Type': 'application/json',
    // 'Authorization': "Bearer " + storage.get('user').token,
  }
})

fetcher.interceptors.request.use(function (config) {
  const token = storage.get('user') && storage.get('user').token
  config.headers.common.Authorization = `Bearer ${token}`;
  return config;
}, function (error) {
  return Promise.reject(error)
})

const errModal = []

fetcher.interceptors.response.use(function (response) {
  const resData = response.data
  const { message } = resData
  if (resData.code) {
    if (message) {
      const errCode = resData.code
      switch (errCode) {
        case 401:
          if (window.location.pathname !== '/' && window.location.pathname !== '/signin' && errModal.length === 0) {
            errModal.push(1)
            Modal.warning({
              title: '提醒',
              content: (
                <div>
                  登陆失效
                </div>
              ),
              onOk() {
                errModal.shift()
                storage.clear()
                if (window.location.pathname === '/delegateDetail' || window.location.pathname === '/announcedetail') {
                  const params = { redirect: window.location.href }
                  history.push(
                    `/signin?${querystring.stringify(params)}`
                  );
                  window.location.reload()
                }
                else {
                  history.push('/signin')
                  window.location.reload()
                }
              },
            })
          } break;
        case 500: if (errModal.length === 0) {
          Modal.error({
            title: '哎呦！后方拥挤',
            content: (
              <div>请稍后再试</div>
            ),
            onOk() {
              errModal.shift()
            }
          })
          errModal.push(1)
        }
          break;
      }
    }
  }
  // if (response.data.code === 200) {
  //   response.data.success = true
  // }
  return response
},
  function (error) {
    console.log(error, 'err')
    // 捕获http错误
    if (errModal.length === 0) {
      Modal.error({
        title: '哎呦！后方拥挤',
        content: (
          <div>请稍后再试</div>
        ),
        onOk() {
          errModal.shift()
        }
      })
      errModal.push(1)
    }
    return {
      data: {
        code: 500
      }, error
    }
  }
)

function mockInterceptors(url) {
  let result = {
    mocked: false,
    url
  }
  // 判断是否为mock形式
  if (typeof url === 'object') {
    if (process.env.MOCK_ENV === 'mock') {
      // 存在mock字段，直接返回mock数据
      if (url.mock) {
        result = {
          mocked: true,
          mock: url.mock
        }
      } else { // 用了mock形式，但是没有mock字段，仍然使用url进行真实请求
        result = {
          mocked: false,
          url: url.url
        }
      }
    } else {
      result = {
        mocked: false,
        url: url.url
      }
    }
  } else { // 兼容老接口，非mock形式
    result = {
      mocked: false,
      url
    }
  }

  return result
}
export const get = (url, params) => {
  params = params || {}
  // params.t = new Date().getTime()
  const mockInfo = mockInterceptors(url)
  if (mockInfo.mocked) {
    return mockInfo.mock
  }
  return fetcher.get(mockInfo.url, { params })

}
export const post = (url, params) => {
  console.log('axios.name', axios.name);
  const mockInfo = mockInterceptors(url)
  if (mockInfo.mocked) {
    return mockInfo.mock
  }
  return fetcher.post(mockInfo.url, params)

}

export const put = (url, params) => {
  const mockInfo = mockInterceptors(url)
  if (mockInfo.mocked) {
    return mockInfo.mock
  }
  return fetcher.put(mockInfo.url, params)

}

export const del = (url, params) => {
  const mockInfo = mockInterceptors(url)
  if (mockInfo.mocked) {
    return mockInfo.mock
  }
  return fetcher.delete(mockInfo.url, { params })

}
export default post
