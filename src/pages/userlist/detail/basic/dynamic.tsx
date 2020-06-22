import { Badge, Card, Descriptions, Divider, Table, Button, Dropdown, Menu, Radio } from 'antd';
import React, { Component } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { history , connect, Dispatch } from 'umi';

import { PageHeaderWrapper } from '@ant-design/pro-layout';

import HooksTable from '@/components/hooksTable/index'
import { BasicProfileDataType } from './data.d';
import styles from './style.less';

const columns: ProColumns<TableListItem>[] = [
  {
    title: 'ID',
    dataIndex: 'name',
  },
  {
    title: '电话',
    dataIndex: 'desc',
    valueType: 'text',
  },
  {
    title: '总资产',
    dataIndex: 'callNo',
    key: 'callNo',
    sorter: true,
    renderText: (val: string) => `${val} 万`,
  },
  {
    title: '现金账户',
    dataIndex: 'callNo',
    key: 'callNo1',
    sorter: true,
    renderText: (val: string) => `${val} 万`,
  },
  {
    title: '储蓄账户',
    dataIndex: 'callNo',
    key: 'callNo2',
    sorter: true,
    renderText: (val: string) => `${val} 万`,
  },
  {
    title: '矿机账户',
    dataIndex: 'callNo',
    key: 'callNo3',
    sorter: true,
    renderText: (val: string) => `${val} 万`,
  },
  {
    title: '超级节点',
    dataIndex: 'callNo',
    key: 'callNo4',
    sorter: true,
    renderText: (val: string) => `${val} 万`,
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueEnum: {
      0: { text: '关闭', status: 'Default' },
      1: { text: '运行中', status: 'Processing' },
      2: { text: '已上线', status: 'Success' },
      3: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '注册时间',
    dataIndex: 'updatedAt',
    sorter: true,
    valueType: 'dateRange',
  },
  {
    title: '状态2',
    dataIndex: 'status',
    order: 10,
    hideInTable: true,
    render: () => {
    },
  },
  {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
    render: (record) => (
      <>
        <a
          onClick={() => {
          }}
        >
          查看
          </a>
        <Divider type="vertical" />
        {/* <a href="">订阅警报</a> */}
      </>
    ),
  },
];
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0,
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  );
};

interface BasicProps {
  loading: boolean;
  dispatch: Dispatch<any>;
  userlistAndbasic: BasicProfileDataType;
}
interface BasicState {
  visible: boolean;
  depsValue: string
}

class Basic extends Component<BasicProps, BasicState> {
  constructor(props) {
    super(props)
    this.state = {
      depsValue: 'a'
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'userlistAndbasic/fetchBasic',
    });
  }

  onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
    this.setState({
      depsValue: e.target.value,
    })
  }

  goexactDetail = (pathname = '') => {
    history.push({
      pathname,
      query: {
        id: history.location.query.id,
      },
    });
  }

  render() {
    const { userlistAndbasic, loading } = this.props;
    const { depsValue } = this.state;
    const { basicGoods, basicProgress } = userlistAndbasic;
    let goodsData: typeof basicGoods = [];
    if (basicGoods.length) {
      let num = 0;
      let amount = 0;
      basicGoods.forEach((item) => {
        num += Number(item.num);
        amount += Number(item.amount);
      });
      goodsData = basicGoods.concat({
        id: '总计',
        num,
        amount,
      });
    }
    const renderContent = (value: any, row: any, index: any) => {
      const obj: {
        children: any;
        props: { colSpan?: number };
      } = {
        children: value,
        props: {},
      };
      if (index === basicGoods.length) {
        obj.props.colSpan = 0;
      }
      return obj;
    };
    const goodsColumns = [
      {
        title: '商品编号',
        dataIndex: 'id',
        key: 'id',
        render: (text: React.ReactNode, row: any, index: number) => {
          if (index < basicGoods.length) {
            return <a href="">{text}</a>;
          }
          return {
            children: <span style={{ fontWeight: 600 }}>总计</span>,
            props: {
              colSpan: 4,
            },
          };
        },
      },
      {
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',
        render: renderContent,
      },
      {
        title: '商品条码',
        dataIndex: 'barcode',
        key: 'barcode',
        render: renderContent,
      },
      {
        title: '单价',
        dataIndex: 'price',
        key: 'price',
        align: 'right' as 'left' | 'right' | 'center',
        render: renderContent,
      },
      {
        title: '数量（件）',
        dataIndex: 'num',
        key: 'num',
        align: 'right' as 'left' | 'right' | 'center',
        render: (text: React.ReactNode, row: any, index: number) => {
          if (index < basicGoods.length) {
            return text;
          }
          return <span style={{ fontWeight: 600 }}>{text}</span>;
        },
      },
      {
        title: '金额',
        dataIndex: 'amount',
        key: 'amount',
        align: 'right' as 'left' | 'right' | 'center',
        render: (text: React.ReactNode, row: any, index: number) => {
          if (index < basicGoods.length) {
            return text;
          }
          return <span style={{ fontWeight: 600 }}>{text}</span>;
        },
      },
    ];
    return (
      <PageHeaderWrapper extra={
        [
          <Button style={{ marginRight: 10 }} key="3">Operation</Button>,
          <Button style={{ marginRight: 10 }} key="2">Operation</Button>,
          <Button style={{ marginRight: 10 }} key="1" type="primary">
            Primary
      </Button>,
          <DropdownMenu key="more" />,
        ]
      }>
        <Card bordered={false} title="基本信息" style={{ marginBottom: 32 }} extra={[

          <Button style={{ marginRight: 10 }} onClick={() => this.goexactDetail('/userlist/detail/miner')} key="3">矿机账户详情</Button>,
          <Button style={{ marginRight: 10 }} key="2">Operation</Button>,
          <Button style={{ marginRight: 10 }} key="1" type="primary">
            Primary
      </Button>,
          <DropdownMenu key="more" />,
        ]}>
          <Descriptions bordered layout="vertical" title="" style={{ marginBottom: 32 }}>
            <Descriptions.Item label="取货单号">1000000000</Descriptions.Item>
            <Descriptions.Item label="状态">已取货</Descriptions.Item>
            <Descriptions.Item label="销售单号">1234123421</Descriptions.Item>
            <Descriptions.Item label="子订单">3214321432</Descriptions.Item>
          </Descriptions>
        </Card>
        <Card bordered={false} title="资产信息" extra={[
          <Button style={{ marginRight: 10 }} key="3">Operation</Button>,
          <Button style={{ marginRight: 10 }} key="2">Operation</Button>,
          <Button style={{ marginRight: 10 }} key="1" type="primary">
            Primary
      </Button>,
          <DropdownMenu key="more" />,
        ]}>
          <Descriptions bordered layout="vertical" title="" style={{ marginBottom: 32 }}>
            <Descriptions.Item label="用户姓名">付小小</Descriptions.Item>
            <Descriptions.Item label="联系电话">18100000000</Descriptions.Item>
            <Descriptions.Item label="常用快递">菜鸟仓储</Descriptions.Item>
            <Descriptions.Item label="取货地址">浙江省杭州市西湖区万塘路18号</Descriptions.Item>
            <Descriptions.Item label="备注">无</Descriptions.Item>
          </Descriptions>
        </Card>
        <Divider style={{ marginBottom: 20 }} />
        <Card bordered={false} title="资产记录" extra={<Radio.Group onChange={this.onChange} buttonStyle="solid" defaultValue="a">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>}>
          {/* <Table
            style={{ marginBottom: 24 }}
            pagination={false}
            loading={loading}
            dataSource={goodsData}
            columns={goodsColumns}
            rowKey="id"
          /> */}
          <HooksTable deps={[depsValue]} depsProps={{ depsValue }} usePagination columns={columns} api='/api/miner/getall' method='GET' />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect(
  ({
    userlistAndbasic,
    loading,
  }: {
    userlistAndbasic: BasicProfileDataType;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    userlistAndbasic,
    loading: loading.effects['userlistAndbasic/fetchBasic'],
  }),
)(Basic);
