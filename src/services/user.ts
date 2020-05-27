import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  // return request('/api/currentUser');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'tfhan',
        // avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        avatar: 'https://shequ-test.dxapp.net/dxAdmin/camel.png',
        userid: '00000001',
        email: 'tfhan@dxchain.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: 'dx－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
          {
            key: '0',
            label: '很有想法的',
          },
          {
            key: '1',
            label: '专注设计',
          },
          {
            key: '2',
            label: '辣~',
          },
          {
            key: '3',
            label: '大长腿',
          },
          {
            key: '4',
            label: '川妹子',
          },
          {
            key: '5',
            label: '海纳百川',
          },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',
        geographic: {
          province: {
            label: '浙江省',
            key: '330000',
          },
          city: {
            label: '杭州市',
            key: '330100',
          },
        },
        address: '西湖区工专路 77 号',
        phone: '0752-268888888',
      })
    }, 300)
  });
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
