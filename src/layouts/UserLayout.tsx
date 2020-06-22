import { DefaultFooter, MenuDataItem, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GithubOutlined } from '@ant-design/icons';
import { Link, useIntl, ConnectProps, connect } from 'umi';
import React from 'react';
import SelectLang from '@/components/SelectLang';
import { ConnectState } from '@/models/connect';
import logo from '../../public/camel.png';
import styles from './UserLayout.less';


export interface UserLayoutProps extends Partial<ConnectProps> {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
}

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { formatMessage } = useIntl();
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    title: 'dx',
    ...props,
  }, true);
  console.log('title', title)
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>

        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>Dx Admin</span>
              </Link>
            </div>
            <div className={styles.desc} />
          </div>
          {children}
        </div>

        <DefaultFooter
          style={{
            position: 'sticky',
            top: '1000px',
          }}
          copyright="2020 Dx前端体验部出品"
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
              key: 'boke2',
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
      </div>
    </HelmetProvider>
  );
};

export default connect(({ settings }: ConnectState) => ({ ...settings }))(UserLayout);
