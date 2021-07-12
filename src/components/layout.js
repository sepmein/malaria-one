import * as React from "react";
import { Link } from "gatsby";
import { Image, Divider, Layout, Menu, BackTop } from "antd";
import {
  DatabaseOutlined,
  FilePptOutlined,
  HomeOutlined,
  SlidersOutlined,
  EyeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import logo from "../images/logo-mark-work-landscape-small.png";
import { heading } from "./layout.module.css";

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
          <Menu
            theme="light"
            defaultSelectedKeys={["home"]}
            defaultOpenKeys={["parameters"]}
            mode="inline"
          >
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <SubMenu
              key="parameters"
              icon={<SlidersOutlined />}
              title="Parameters"
            >
              <Menu.Item key="parameters.list">
                <Link to="/parameters">List</Link>
              </Menu.Item>
              <Menu.Item key="parameters.graph">
                <Link to="/graph">Graph</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="3" icon={<FilePptOutlined />}>
              <Link to="/paper">Papers</Link>
            </Menu.Item>
            <Divider></Divider>
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
            <Menu.Item key="about" icon={<EyeOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className={heading}>
            <Image src={logo} preview={false} placeholder="Malaria.ONE"></Image>
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
