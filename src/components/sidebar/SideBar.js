import React from "react";
import { Image, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import CustomHeader from "../header/Header";
import MenuItems from "./MenuItems/MenuItems";


const SideBar = () => {
  return (
    <>
      <CustomHeader />
      <Layout>
        <Sider
        width={250}
          theme="light"
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <MenuItems />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px 0",
              height: "calc(100vh - 155px)"
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: "white",
              }}
            >
              content
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default SideBar;
