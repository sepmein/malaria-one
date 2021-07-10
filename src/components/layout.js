import * as React from "react";
import { Link } from "gatsby";
import { Divider, Layout, Menu, BackTop } from "antd";
import {
  DatabaseOutlined,
  FilePptOutlined,
  HomeOutlined,
  SlidersOutlined,
  EyeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Frame extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <BackTop />
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<SlidersOutlined />}>
              <Link to="/parameters">Parameters</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FilePptOutlined />}>
              <Link to="/paper">Papers</Link>
            </Menu.Item>
            <Divider></Divider>
            <Menu.Item key="4" icon={<EyeOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<GithubOutlined />}>
              <Link to="/open-source">Open Source</Link>
            </Menu.Item>
            <SubMenu key="db" icon={<DatabaseOutlined />} title="Add More Data">
              <Menu.Item key="db.db">
                <Link to="/data#db">Database</Link>
              </Menu.Item>
              <Menu.Item key="db.interface">
                <Link to="/data#interface">Interface</Link>
              </Menu.Item>
              <Menu.Item key="db.request">
                <Link to="/data#request">Request an Account</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            Malaria One
          </Header>
          <Content style={{ margin: "0 16px" }}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>
            Malaria One ©2021 Created by Chunzhe ZHANG
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Frame;
