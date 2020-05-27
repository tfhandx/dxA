// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  history: {
    type: 'hash',
  },
  dva: {
    hmr: true,
  },
  // layout: {
  //   logo: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   title: 'Dx Admin'
  // },
  publicPath: REACT_APP_ENV === 'dev' ? '/' : REACT_APP_ENV === 'pre' ? 'https://tfhandx.github.io/dxA/' : '/',
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
            {
              name: 'register-result',
              icon: 'smile',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },
            {
              component: '404',
            },
          ],
        },

        {
          path: '/',
          component: '../layouts/BasicLayout',
          // Routes: ['src/pages/Authorized'],
          // authority: ['admin',],
          routes: [
            {
              path: '/dashboard',
              name: 'dashboard',
              icon: 'dashboard',
              // authority: ['admin'],
              routes: [
                {
                  name: 'analysis',
                  icon: 'smile',
                  path: '/dashboard/analysis',
                  component: './dashboard/analysis',
                },
                {
                  name: 'monitor',
                  icon: 'smile',
                  path: '/dashboard/monitor',
                  component: './dashboard/monitor',
                },
                {
                  name: 'workplace',
                  icon: 'smile',
                  path: '/dashboard/workplace',
                  component: './dashboard/workplace',
                },
              ],
            },
            //管理员部分
            {
              path: '/admin',
              name: 'admin',
              icon: 'dashboard',
              // authority: ['admin'],
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
                      component: './admin/verify/list',
                    },
                    {
                      name: 'detail',
                      icon: 'smile',
                      path: '/admin/verify/detail',
                      component: './admin/verify/detail',
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
                      component: './admin/announcelist/list',
                    },
                    {
                      name: 'detail',
                      icon: 'smile',
                      path: '/admin/announcelist/detail',
                      component: './admin/announcelist/detail',
                    },
                    {
                      name: 'edit',
                      icon: 'smile',
                      path: '/admin/announcelist/edit',
                      component: './admin/announcelist/edit',
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
              routes: [
                {
                  name: 'list',
                  icon: 'smile',
                  path: '/userlist/list',
                  component: './userlist/list',
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
                      component: './userlist/detail/basic',
                    },
                    {
                      name: 'detail-advanced',
                      icon: 'smile',
                      path: '/userlist/detail/advanced',
                      component: './userlist/detail/advanced',
                    },
                    {//矿机详情
                      name: 'detail-miner',
                      icon: 'smile',
                      path: '/userlist/detail/miner',
                      component: './userlist/detail/miner',
                    },
                    {//现金账户详情chk
                      name: 'detail-chk',
                      icon: 'smile',
                      path: '/userlist/detail/chk',
                      component: './userlist/detail/chk',
                    },
                    {//储蓄账户详情chk
                      name: 'detail-saving',
                      icon: 'smile',
                      path: '/userlist/detail/saving',
                      component: './userlist/detail/saving',
                    },
                    {//超级节点账户详情chk
                      name: 'detail-supernode',
                      icon: 'smile',
                      path: '/userlist/detail/supernode',
                      component: './userlist/detail/supernode',
                    },
                  ],
                },
              ],
            },
            //资金管理
            {
              path: '/fundslist',
              icon: 'smile',
              name: 'fundslist',
              routes: [
                {//资金查询列表和dashboard
                  name: 'list',
                  icon: 'smile',
                  path: '/fundslist/list',
                  component: './fundslist/list',
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
                      component: './fundslist/detail/basic',
                    },
                    {//资金提现详情
                      name: 'detail-out',
                      icon: 'smile',
                      path: '/fundslist/detail/out',
                      component: './fundslist/detail/out',
                    },
                    {//资金充值详情
                      name: 'detail-in',
                      icon: 'smile',
                      path: '/fundslist/detail/in',
                      component: './fundslist/detail/in',
                    },
                    {//提现
                      name: 'detail-withdraw',
                      icon: 'smile',
                      path: '/fundslist/detail/withdraw',
                      component: './fundslist/detail/withdraw',
                    },
                    {//充值
                      name: 'detail-recharge',
                      icon: 'smile',
                      path: '/fundslist/detail/recharge',
                      component: './fundslist/detail/recharge',
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
              redirect: '/dashboard/analysis',
              authority: ['admin', 'user'],
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
    basePath: '/',
  },
});