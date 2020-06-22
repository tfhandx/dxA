import request from 'umi-request';
import { TableListParams } from './data.d';

export async function queryRule(params?: TableListParams) {
  return new Promise((resolve, reject) => {
    resolve({
      "data": [
        {
          "key": 0,
          "disabled": true,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          "name": "TradeCode 0",
          "title": "一个任务名称 0",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 6,
          "status": 1,
          "updatedAt": "2017-06-30T16:00:00.000Z",
          "createdAt": "2017-06-30T16:00:00.000Z",
          "progress": 5
        },
        {
          "key": 1,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          "name": "TradeCode 1",
          "title": "一个任务名称 1",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 790,
          "status": 1,
          "updatedAt": "2017-06-30T16:00:00.000Z",
          "createdAt": "2017-06-30T16:00:00.000Z",
          "progress": 60
        },
        {
          "key": 2,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          "name": "TradeCode 2",
          "title": "一个任务名称 2",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 513,
          "status": 1,
          "updatedAt": "2017-07-01T16:00:00.000Z",
          "createdAt": "2017-07-01T16:00:00.000Z",
          "progress": 58
        },
        {
          "key": 3,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          "name": "TradeCode 3",
          "title": "一个任务名称 3",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 60,
          "status": 3,
          "updatedAt": "2017-07-01T16:00:00.000Z",
          "createdAt": "2017-07-01T16:00:00.000Z",
          "progress": 99
        },
        {
          "key": 4,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          "name": "TradeCode 4",
          "title": "一个任务名称 4",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 734,
          "status": 0,
          "updatedAt": "2017-07-02T16:00:00.000Z",
          "createdAt": "2017-07-02T16:00:00.000Z",
          "progress": 97
        },
        {
          "key": 5,
          "disabled": false,
          "href": "曲丽丽 design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          "name": "TradeCode 5",
          "title": "一个任务名称 5",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 492,
          "status": 3,
          "updatedAt": "2017-07-02T16:00:00.000Z",
          "createdAt": "2017-07-02T16:00:00.000Z",
          "progress": 63
        },
        {
          "key": 6,
          "disabled": true,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          "name": "TradeCode 6",
          "title": "一个任务名称 6",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 189,
          "status": 2,
          "updatedAt": "2017-07-03T16:00:00.000Z",
          "createdAt": "2017-07-03T16:00:00.000Z",
          "progress": 66
        },
        {
          "key": 7,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          "name": "TradeCode 7",
          "title": "一个任务名称 7",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 941,
          "status": 2,
          "updatedAt": "2017-07-03T16:00:00.000Z",
          "createdAt": "2017-07-03T16:00:00.000Z",
          "progress": 81
        },
        {
          "key": 8,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          "name": "TradeCode 8",
          "title": "一个任务名称 8",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 366,
          "status": 1,
          "updatedAt": "2017-07-04T16:00:00.000Z",
          "createdAt": "2017-07-04T16:00:00.000Z",
          "progress": 96
        },
        {
          "key": 9,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          "name": "TradeCode 9",
          "title": "一个任务名称 9",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 709,
          "status": 0,
          "updatedAt": "2017-07-04T16:00:00.000Z",
          "createdAt": "2017-07-04T16:00:00.000Z",
          "progress": 33
        },
        {
          "key": 10,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          "name": "TradeCode 10",
          "title": "一个任务名称 10",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 112,
          "status": 3,
          "updatedAt": "2017-07-05T16:00:00.000Z",
          "createdAt": "2017-07-05T16:00:00.000Z",
          "progress": 55
        },
        {
          "key": 11,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          "name": "TradeCode 11",
          "title": "一个任务名称 11",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 506,
          "status": 3,
          "updatedAt": "2017-07-05T16:00:00.000Z",
          "createdAt": "2017-07-05T16:00:00.000Z",
          "progress": 22
        },
        {
          "key": 12,
          "disabled": true,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          "name": "TradeCode 12",
          "title": "一个任务名称 12",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 599,
          "status": 2,
          "updatedAt": "2017-07-06T16:00:00.000Z",
          "createdAt": "2017-07-06T16:00:00.000Z",
          "progress": 60
        },
        {
          "key": 13,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          "name": "TradeCode 13",
          "title": "一个任务名称 13",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 324,
          "status": 2,
          "updatedAt": "2017-07-06T16:00:00.000Z",
          "createdAt": "2017-07-06T16:00:00.000Z",
          "progress": 22
        },
        {
          "key": 14,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          "name": "TradeCode 14",
          "title": "一个任务名称 14",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 695,
          "status": 2,
          "updatedAt": "2017-07-07T16:00:00.000Z",
          "createdAt": "2017-07-07T16:00:00.000Z",
          "progress": 72
        },
        {
          "key": 15,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          "name": "TradeCode 15",
          "title": "一个任务名称 15",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 967,
          "status": 3,
          "updatedAt": "2017-07-07T16:00:00.000Z",
          "createdAt": "2017-07-07T16:00:00.000Z",
          "progress": 67
        },
        {
          "key": 16,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          "name": "TradeCode 16",
          "title": "一个任务名称 16",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 378,
          "status": 0,
          "updatedAt": "2017-07-08T16:00:00.000Z",
          "createdAt": "2017-07-08T16:00:00.000Z",
          "progress": 2
        },
        {
          "key": 17,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          "name": "TradeCode 17",
          "title": "一个任务名称 17",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 87,
          "status": 3,
          "updatedAt": "2017-07-08T16:00:00.000Z",
          "createdAt": "2017-07-08T16:00:00.000Z",
          "progress": 42
        },
        {
          "key": 18,
          "disabled": true,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          "name": "TradeCode 18",
          "title": "一个任务名称 18",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 326,
          "status": 3,
          "updatedAt": "2017-07-10T00:00:00.000Z",
          "createdAt": "2017-07-10T00:00:00.000Z",
          "progress": 20
        },
        {
          "key": 19,
          "disabled": false,
          "href": "https://ant.design",
          "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          "name": "TradeCode 19",
          "title": "一个任务名称 19",
          "owner": "曲丽丽",
          "desc": "这是一段描述",
          "callNo": 549,
          "status": 1,
          "updatedAt": "2017-07-10T00:00:00.000Z",
          "createdAt": "2017-07-10T00:00:00.000Z",
          "progress": 76
        }
      ],
      "total": 20,
      "success": true,
      "pageSize": 20,
      "current": 1
    })
  })
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
