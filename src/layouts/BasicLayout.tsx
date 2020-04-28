/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
  DefaultFooter,
  SettingDrawer,
} from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import { Link, useIntl, connect, Dispatch, Redirect } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { Result, Button, Divider } from 'antd';
import Authorized from '@/utils/Authorized';
// import Authorized from '@/pages/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { ConnectState } from '@/models/connect';
import { getAuthorityFromRouter } from '@/utils/utils';
import logo from '../assets/logodx.svg';
const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);
const Title = () => {
  return <span>
    Dx Admin
  </span>
}
export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
  dispatch: Dispatch;
}
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
};
/**
 * use Authorized check all menu item
 */

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
    return Authorized.check(item.authority, localItem, null) as MenuDataItem;
  });

const defaultFooterDom = (
  <DefaultFooter
    style={{
      // position: 'absolute',
      // bottom: '0px',
      // width: '100%'
    }}
    copyright="2020 Dx前端体验技术部出品"
    links={[
      {
        key: 'shequ',
        title: '社区',
        href: 'https://shequ.dxchain.com/',
        blankTarget: true,
      },
      {
        key: 'main',
        title: '官网',
        href: 'https://www.dxchain.com',
        blankTarget: true,
      },
      {
        key: 'xiting',
        title: '西亭数据',
        href: 'https://www.xitingdata.com/signup&refer_by_code=35569',
        blankTarget: true,
      },
      {
        key: 'boke',
        title: 'DX博客',
        href: 'https://blog.dxchain.com/',
        blankTarget: true,
      },
      {
        key: 'linknode',
        title: '链节点',
        href: 'https://www.chainnode.com/forum/382',
        blankTarget: true,
      },
      {
        key: 'boke',
        title: 'DX博客',
        href: 'https://blog.dxchain.com/',
        blankTarget: true,
      },
    ]}
  />
);

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    dispatch,
    children,
    settings,
    collapsed,
    login,
    location = {
      pathname: '/',
    },
  } = props;
  /**
   * constructor
   */

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);
  /**
   * init variables
   */

  const handleMenuCollapse = (payload: boolean): void => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
    authority: undefined,
  };
  console.log('authorized!.authority', authorized)
  const { formatMessage } = useIntl();
  const { isLogined } = login;
  const isLogin = isLogined;
  console.log('isLogined', isLogin)
  return (
    <>
      <ProLayout
        logo={'https://shequ-test.dxapp.net/dxAdmin/camel.png'}
        formatMessage={formatMessage}
        // title='dx'
        menuHeaderRender={(logoDom, titleDom) => (
          <Link to="/">
            {logoDom}
            {/* {titleDom} */}
            {collapsed ? null : <h1>DxAdmin</h1>}
          </Link>
        )}
        onCollapse={handleMenuCollapse}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
            return defaultDom;
          }

          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        breadcrumbRender={(routers = []) => [
          {
            path: '/',
            breadcrumbName: formatMessage({
              id: 'menu.home',
            }),
          },
          ...routers,
        ]}
        itemRender={(route, params, routes, paths) => {
          const first = routes.indexOf(route) === 0;
          return first ? (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
          ) : (
              <span>{route.breadcrumbName}</span>
            );
        }}
        footerRender={() => defaultFooterDom}
        menuDataRender={menuDataRender}
        rightContentRender={() => <RightContent />}
        {...props}
        // title={() => <Title></Title>}
        {...settings}
      >
        <Authorized authority={authorized.authority}
          noMatch={isLogin ? <Redirect to="/exception/403" /> : <Redirect to="/user/login" />}>
          {children}
        </Authorized>
      </ProLayout>
      <SettingDrawer
        settings={settings}
        onSettingChange={(config) =>
          dispatch({
            type: 'settings/changeSetting',
            payload: config,
          })
        }
      />
    </>
  );
};

export default connect(({ global, settings, login }: ConnectState) => ({
  collapsed: global.collapsed,
  settings,
  login
}))(BasicLayout);
