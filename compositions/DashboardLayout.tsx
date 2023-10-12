"use client"

import React from 'react';
import { useSession, signOut, getSession } from "next-auth/react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu, theme } from 'antd';
import { useRouter, usePathname } from 'next/navigation';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  { label: 'Sponsors', route: '/sponsors', icon: UserOutlined },
  { label: 'Basketball', route: '/basketball', icon: VideoCameraOutlined },
  { label: 'Payments', route: '/payments', icon: UploadOutlined },
  { label: 'Contacts', route: '/contacts', icon: BarChartOutlined },
].map((item, index) => ({
  key: item.route,
  icon: React.createElement(item.icon),
  route: item.route,
  label: item.label,
}));

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();
  const pathname = usePathname();

  const onSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
    router.refresh();
  }
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" onClick={({ key }) => router.push(key)} items={items} defaultSelectedKeys={[pathname]} />
        <Button onClick={() => onSignOut()}>Signout</Button>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center' }} className='text-white'>
            {children}
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;