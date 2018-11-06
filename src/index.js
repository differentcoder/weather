
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb ,Table, Divider, Tag } from 'antd';

const { Header, Content, Footer } = Layout;
const dataSource = [{
    name: 'TODAY',
    DESCRIPTION: 'Thunderstorms',
    HIGHLOW: '67°/48°',
    PRECIP: '100%',
    WIND: 'SW 10 mph%',
    HUMIDITY: '84%'
}, {
    name: 'WED',
    DESCRIPTION: 'Thunderstorms',
    HIGHLOW: '67°/48°',
    PRECIP: '100%',
    WIND: 'SW 10 mph%',
    HUMIDITY: '84%'
}];

const columns = [{
    title: 'DAY',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'DESCRIPTION',
    dataIndex: 'DESCRIPTION',
    key: 'DESCRIPTION',
}, {
    title: 'HIGH / LOW',
    dataIndex: 'HIGH / LOW',
    key: 'HIGHLOW',
},{
    title: 'PRECIP',
    dataIndex: 'PRECIP',
    key: 'PRECIP',
},{
    title: 'WIND',
    dataIndex: 'WIND',
    key: 'WIND',
},{
    title: 'HUMIDITY',
    dataIndex: 'HUMIDITY',
    key: 'HUMIDITY',
}];

ReactDOM.render(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">  Weather Project </Menu.Item>

      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>

          <div className="headerdata">
            <h2>Washington, DC 5 Day Weather</h2>
              <p>9:33 am EST</p>
              <div className="tabiledata">
                  <Table dataSource={dataSource} columns={columns} />
              </div>
          </div>

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Project  ©2018 Created by Minhaj
    </Footer>
  </Layout>,
  document.getElementById('container'));
          