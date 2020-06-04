// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
const isDynamic = true;
export default defineConfig({
  hash: true,
  antd: {},
  history: {
    type: 'hash',
  },
  externals: {
    react: 'window.React',
    ['react-dom']: 'window.ReactDOM',
    // 'mobx': 'window.mobx',
    // bizcharts: 'window.BizCharts',
    // axios: 'window.axios',
    // ['mobx-react']: 'window.mobxReact',
  },
  scripts: [
    'https://unpkg.com/react@16/umd/react.production.min.js',
    'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
    // 'https://gw.alipayobjects.com/os/lib/bizcharts/3.5.8/umd/BizCharts.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/mobx/5.15.4/mobx.umd.min.js',
    // 'https://unpkg.com/mobx@5.14.0/lib/mobx.umd.js',
    // 'https://unpkg.com/mobx-react@6.2.0/dist/mobxreact.umd.production.min.js',
    // 'https://unpkg.com/axios/dist/axios.min.js',
    // 'https://unpkg.com/mobx-react'

  ],
  dva: {
    hmr: true,
  },
  // layout: {
  //   logo: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   title: 'Dx Admin'
  // },
  publicPath: REACT_APP_ENV === 'dev' ? '/' : REACT_APP_ENV === 'pre' ? 'https://shequ-test.dxapp.net/dxAdmin/' : '/',
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    // {
    //   path: '/',
    //   component: '../layouts/BlankLayout',
    //   routes: [
    //     {
    //       path: '/user',
    //       component: '../layouts/UserLayout',
    //       routes: [
    //         {
    //           path: '/user',
    //           redirect: '/user/login',
    //         },
    //         {
    //           name: 'login',
    //           icon: 'smile',
    //           path: '/user/login',
    //           component: './user/login',
    //         },
    //         {
    //           name: 'register-result',
    //           icon: 'smile',
    //           path: '/user/register-result',
    //           component: './user/register-result',
    //         },
    //         {
    //           name: 'register',
    //           icon: 'smile',
    //           path: '/user/register',
    //           component: './user/register',
    //         },
    //         {
    //           component: '404',
    //         },
    //       ],
    //     },
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              icon: 'smile',
              path: '/user/login',
              component: './user/login',
            },
            // {
            //   name: 'register-result',
            //   icon: 'smile',
            //   path: '/user/register-result',
            //   component: './user/register-result',
            // },
            // {
            //   name: 'register',
            //   icon: 'smile',
            //   path: '/user/register',
            //   component: './user/register',
            // },
            {
              component: '404',
            },
          ],
        },

        {
          path: '/',
          component: '../layouts/BasicLayout',
          // Routes: ['src/pages/Authorized'],
          authority: ['user', 'admin'],
          routes: [
            // {
            //   path: '/dashboard',
            //   name: 'dashboard',
            //   icon: 'dashboard',
            //   authority: ['admin'],
            //   routes: [
            //     {
            //       name: 'analysis',
            //       icon: 'smile',
            //       path: '/dashboard/analysis',
            //       component: './dashboard/analysis',
            //     },
            //     {
            //       name: 'monitor',
            //       icon: 'smile',
            //       path: '/dashboard/monitor',
            //       component: './dashboard/monitor',
            //     },
            //     {
            //       name: 'workplace',
            //       icon: 'smile',
            //       path: '/dashboard/workplace',
            //       component: './dashboard/workplace',
            //     },
            //   ],
            // },
            //管理员部分
            {
              path: '/admin',
              name: 'admin',
              icon: 'dashboard',
              authority: ['admin'],
              routes: [
                {
                  name: 'verify',
                  icon: 'smile',
                  path: '/admin/verify',
                  // component: './admin/verify',
                  routes: [
                    {
                      name: 'list',
                      icon: 'smile',
                      path: '/admin/verify/list',
                      component: isDynamic ? './admin/verify/list' : './admin/verify/list/dynamic',
                    },
                    {
                      name: 'detail',
                      icon: 'smile',
                      path: '/admin/verify/detail',
                      component: isDynamic ? './admin/verify/detail' : './admin/verify/detail/dynamic',
                    },
                  ],
                },
                {
                  name: 'announcelist',
                  icon: 'smile',
                  path: '/admin/announcelist',
                  // component: './admin/announce',
                  routes: [
                    {
                      name: 'list',
                      icon: 'smile',
                      path: '/admin/announcelist/list',
                      component: isDynamic ? './admin/announcelist/list' : './admin/announcelist/list/dynamic',
                    },
                    {
                      name: 'detail',
                      icon: 'smile',
                      path: '/admin/announcelist/detail',
                      component: isDynamic ? './admin/announcelist/detail' : './admin/announcelist/detail/dynamic',
                    },
                    {
                      name: 'edit',
                      icon: 'smile',
                      path: '/admin/announcelist/edit',
                      component: isDynamic ? './admin/announcelist/edit' : './admin/announcelist/edit/dynamic',
                    },
                  ],
                },
              ],
            },
            // {
            //   name: 'formily',
            //   authority: ['admin',],
            //   icon: 'smile',
            //   path: '/formily',
            //   component: './formily',
            // },
            // {
            //   name: 'tree',
            //   icon: 'smile',
            //   path: '/tree',
            //   component: './tree',
            // },
            // {
            //   path: '/form',
            //   icon: 'form',
            //   name: 'form',
            //   routes: [
            //     {
            //       name: 'basic-form',
            //       icon: 'smile',
            //       path: '/form/basic-form',
            //       component: './form/basic-form',
            //     },
            //     {
            //       name: 'step-form',
            //       icon: 'smile',
            //       path: '/form/step-form',
            //       component: './form/step-form',
            //     },
            //     {
            //       name: 'advanced-form',
            //       icon: 'smile',
            //       path: '/form/advanced-form',
            //       component: './form/advanced-form',
            //     },
            //   ],
            // },
            //用户管理
            {
              path: '/userlist',
              icon: 'smile',
              name: 'user-list',
              authority: ['user', 'admin'],
              routes: [
                {
                  name: 'list',
                  icon: 'smile',
                  path: '/userlist/list',
                  component: isDynamic ? './userlist/list' : './userlist/list/dynamic',
                },
                {
                  path: '/userlist/detail',
                  name: 'detail',
                  icon: 'profile',
                  routes: [
                    {
                      name: 'detail-basic',
                      icon: 'smile',
                      path: '/userlist/detail/basic',
                      component: isDynamic ? './userlist/detail/basic' : './userlist/detail/basic/dynamic',
                    },
                    {
                      name: 'detail-advanced',
                      icon: 'smile',
                      path: '/userlist/detail/advanced',
                      component: isDynamic ? './userlist/detail/advanced' : './userlist/detail/advanced/dynamic',
                    },
                    {//矿机详情
                      name: 'detail-miner',
                      icon: 'smile',
                      path: '/userlist/detail/miner',
                      component: isDynamic ? './userlist/detail/miner' : './userlist/detail/miner/dynamic',
                    },
                    {//现金账户详情chk
                      name: 'detail-chk',
                      icon: 'smile',
                      path: '/userlist/detail/chk',
                      component: isDynamic ? './userlist/detail/chk' : './userlist/detail/chk/dynamic',
                    },
                    {//储蓄账户详情chk
                      name: 'detail-saving',
                      icon: 'smile',
                      path: '/userlist/detail/saving',
                      component: isDynamic ? './userlist/detail/saving' : './userlist/detail/saving/dynamic',
                    },
                    {//超级节点账户详情chk
                      name: 'detail-supernode',
                      icon: 'smile',
                      path: '/userlist/detail/supernode',
                      component: isDynamic ? './userlist/detail/supernode' : './userlist/detail/supernode/dynamic',
                    },
                  ],
                },
              ],
            },
            //资金管理
            {
              path: '/fundslist',
              authority: ['user', 'admin'],
              icon: 'smile',
              name: 'fundslist',
              routes: [
                {//资金查询列表和dashboard
                  name: 'list',
                  icon: 'smile',
                  path: '/fundslist/list',
                  component: isDynamic ? './fundslist/list' : './fundslist/list/dynamic',
                },
                {//资金详情
                  path: '/fundslist/detail',
                  name: 'detail',
                  icon: 'profile',
                  routes: [
                    {
                      name: 'detail-basic',
                      icon: 'smile',
                      path: '/fundslist/detail/basic',
                      component: isDynamic ? './fundslist/detail/basic' : './fundslist/detail/basic/dynamic',
                    },
                    {//资金提现详情
                      name: 'detail-out',
                      icon: 'smile',
                      path: '/fundslist/detail/out',
                      component: isDynamic ? './fundslist/detail/out' : './fundslist/detail/out/dynamic',
                    },
                    {//资金充值详情
                      name: 'detail-in',
                      icon: 'smile',
                      path: '/fundslist/detail/in',
                      component: isDynamic ? './fundslist/detail/in' : './fundslist/detail/in/dynamic',
                    },
                    {//提现
                      name: 'detail-withdraw',
                      icon: 'smile',
                      path: '/fundslist/detail/withdraw',
                      component: isDynamic ? './fundslist/detail/withdraw' : './fundslist/detail/withdraw/dynamic',
                    },
                    {//充值
                      name: 'detail-recharge',
                      icon: 'smile',
                      path: '/fundslist/detail/recharge',
                      component: isDynamic ? './fundslist/detail/recharge' : './fundslist/detail/recharge/dynamic',
                    },
                  ],
                },
              ],
            },
            // {
            //   path: '/list',
            //   icon: 'table',
            //   name: 'list',
            //   routes: [
            //     {
            //       path: '/list/search',
            //       name: 'search-list',
            //       component: './list/search',
            //       routes: [
            //         {
            //           path: '/list/search',
            //           redirect: '/list/search/articles',
            //         },
            //         {
            //           name: 'articles',
            //           icon: 'smile',
            //           path: '/list/search/articles',
            //           component: './list/search/articles',
            //         },
            //         {
            //           name: 'projects',
            //           icon: 'smile',
            //           path: '/list/search/projects',
            //           component: './list/search/projects',
            //         },
            //         {
            //           name: 'applications',
            //           icon: 'smile',
            //           path: '/list/search/applications',
            //           component: './list/search/applications',
            //         },
            //       ],
            //     },
            //     {
            //       name: 'table-list',
            //       icon: 'smile',
            //       path: '/list/table-list',
            //       component: './list/table-list',
            //     },
            //     {
            //       name: 'basic-list',
            //       icon: 'smile',
            //       path: '/list/basic-list',
            //       component: './list/basic-list',
            //     },
            //     {
            //       name: 'card-list',
            //       icon: 'smile',
            //       path: '/list/card-list',
            //       component: './list/card-list',
            //     },
            //   ],
            // },
            // {
            //   path: '/profile',
            //   name: 'profile',
            //   icon: 'profile',
            //   routes: [
            //     {
            //       name: 'basic',
            //       icon: 'smile',
            //       path: '/profile/basic',
            //       component: './profile/basic',
            //     },
            //     {
            //       name: 'advanced',
            //       icon: 'smile',
            //       path: '/profile/advanced',
            //       component: './profile/advanced',
            //     },
            //   ],
            // },
            // {
            //   name: 'result',
            //   icon: 'CheckCircleOutlined',
            //   path: '/result',
            //   routes: [
            //     {
            //       name: 'success',
            //       icon: 'smile',
            //       path: '/result/success',
            //       component: './result/success',
            //     },
            //     {
            //       name: 'fail',
            //       icon: 'smile',
            //       path: '/result/fail',
            //       component: './result/fail',
            //     },
            //   ],
            // },
            {
              name: 'exception',
              icon: 'warning',
              path: '/exception',
              hideChildrenInMenu: true,
              hideInMenu: true,
              routes: [
                {
                  name: '403',
                  icon: 'smile',
                  path: '/exception/403',
                  component: './exception/403',
                },
                {
                  name: '404',
                  icon: 'smile',
                  path: '/exception/404',
                  component: './exception/404',
                },
                {
                  name: '500',
                  icon: 'smile',
                  path: '/exception/500',
                  component: './exception/500',
                },
              ],
            },
            {
              name: 'account',
              authority: ['user', 'admin'],
              icon: 'user',
              path: '/account',
              hideInMenu: true,
              routes: [
                {
                  name: 'center',
                  icon: 'smile',
                  path: '/account/center',
                  component: './account/center',
                },
                {
                  name: 'settings',
                  icon: 'smile',
                  path: '/account/settings',
                  component: './account/settings',
                },
              ],
            },
            {
              name: 'authority',
              authority: ['admin',],
              icon: 'user',
              path: '/authority',
              component: './authority',
              // hideInMenu: true,
              // routes: [
              //   {
              //     name: 'center',
              //     icon: 'smile',
              //     path: '/account/center',
              //     component: './account/center',
              //   },
              //   {
              //     name: 'settings',
              //     icon: 'smile',
              //     path: '/account/settings',
              //     component: './account/settings',
              //   },
              // ],
            },
            {
              name: 'authority-create',
              authority: ['admin',],
              icon: 'user',
              path: '/authority/create',
              component: './authority/create',
              // hideInMenu: true,
            },
            // {
            //   name: 'editor',
            //   icon: 'highlight',
            //   path: '/editor',
            //   routes: [
            //     {
            //       name: 'flow',
            //       icon: 'smile',
            //       path: '/editor/flow',
            //       component: './editor/flow',
            //     },
            //     {
            //       name: 'mind',
            //       icon: 'smile',
            //       path: '/editor/mind',
            //       component: './editor/mind',
            //     },
            //     {
            //       name: 'koni',
            //       icon: 'smile',
            //       path: '/editor/koni',
            //       component: './editor/koni',
            //     },
            //   ],
            // },
            {
              path: '/',
              redirect: '/userlist/list',
              authority: ['user'],
            },
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || 'dev',
    // ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
    // ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', 
    // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: REACT_APP_ENV === 'dev' ? '/' : REACT_APP_ENV === 'pre' ? '/dxAdmin/' : '/'
  },
  // chunks: ['vendors', 'umi',],
  chainWebpack: function (config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: 0,
          minChunks: 2,
          maxAsyncRequests: 6,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              chunks: 'all',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: -10,
            },
            antdesignicons: {
              name: 'antdesignicons',
              minChunks: 1,
              minSize: 0,
              test: /[\\/]node_modules[\\/]@ant-design[\\/icons]/,
              priority: 30,
            },
            dataset1: {
              name: 'dataset',
              chunks: 'all',
              priority: 10,
              minSize: 100,
              test({ resource }) {
                return /[\\/]node_modules[\\/](@antv[\\/]data-set)[\\/]/.test(resource);
              },
              minChunks: 1,
            },
            bizcharts: {
              name: 'bizcharts',
              chunks: 'all',
              priority: 10,
              minSize: 100,
              test({ resource }) {
                return /[\\/]node_modules[\\/](bizcharts)[\\/]/.test(resource);
              },
              minChunks: 1,
            },
            others: {
              name: 'others',
              chunks: 'async',
              priority: 10,
              minSize: 100,
              test({ resource }) {
                return /[\\/]node_modules[\\/]((@formily)|(gg-editor)|(fetch)|(antd-mobile)|(@umijs[\\/]hooks))[\\/]/.test(resource);
              },
              minChunks: 1,
            },
            // antdesign: {
            //   name: 'antdesign',
            //   chunks: 'all',
            //   priority: 50,
            //   minSize: 100,
            //   test: /[\\/]node_modules[\\/]@ant-design/,
            //   minChunks: 1,
            // },
            antd: {
              name: 'antd',
              chunks: 'all',
              priority: 30,
              minSize: 100,
              test({ resource }) {
                return /[\\/]node_modules[\\/]antd[\\/]es/.test(resource);
              },
            },
            wang: {
              name: "wang",
              test: /[\\/]node_modules[\\/]wangeditor[\\/]/,
              chunks: "all",
              priority: -1
            },
            lodash: {
              name: "lodash",
              test: /[\\/]node_modules[\\/]lodash[\\/]/,
              chunks: "all",
              priority: 50
            },
            react: {
              name: "react",
              test: /[\\/]node_modules[\\/]react[\\/]/,
              chunks: "all",
              priority: 50
            },
            // reactdom: {
            //   name: "reactdom",
            //   test: /[\\/]node_modules[\\/]react-dom[\\/]/,
            //   chunks: "all",
            //   priority: 50
            // },
          },
        }
      }
    });
    // config.plugin("replace").use(require("webpack").ContextReplacementPlugin).tap(() => {
    //   return [/moment[/\\]locale$/, /zh-cn/];
    // });
  },

});
