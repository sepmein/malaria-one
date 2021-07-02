import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  componentsLayoutDemoTopSide2,
  logo,
  antRowRtl,
  siteLayoutBackground,
} from "./layout.module.css";
import { Layout as Layout, Menu, Breadcrumb, BackTop } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Frame = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Layout>
      <BackTop />
      <Header className="header">
        <div className={logo} />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className={siteLayoutBackground}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className={siteLayoutBackground}
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
    // <main className={container}>
    //   <title>
    //     {pageTitle} | {data.site.siteMetadata.title}
    //   </title>
    //   <p className={heading}>{data.site.siteMetadata.title}</p>
    //   <nav>
    //     <ul className={navLinks}>
    //       <li className={navLinkItem}>
    //         <Link to="/" className={navLinkText}>
    //           Home
    //         </Link>
    //       </li>
    //       <li className={navLinkItem}>
    //         <Link to="/about" className={navLinkText}>
    //           About
    //         </Link>
    //       </li>
    //       <li className={navLinkItem}>
    //         <Link to="/blog" className={navLinkText}>
    //           Blog
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <h1 className={heading}>{pageTitle}</h1>
    //   {children}
    // </main>
  );
};

export default Frame;
