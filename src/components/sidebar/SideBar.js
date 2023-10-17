import React from "react";
import { Card, Col, Grid, Image, Layout, Menu, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import CustomHeader from "../header/Header";
import MenuItems from "./MenuItems/MenuItems";
import { MailOutlined } from "@ant-design/icons";
import MenuIcon from "../../assets/Icons/Menu.svg";
import styles from "./style.module.scss";
import Chart from "../Chart/Chart";
import Customer from "../Section/Customer/Customer";

const SideBar = () => {
  return (
    <>
      <Layout>
        <CustomHeader />
        <Layout hasSider className={styles.menuIconButton}>
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
            // trigger={<img src={MenuIcon} className={styles.menuIconImg} />}
          >
            <div className="demo-logo-vertical" />
            <MenuItems />
          </Sider>
          <Content>
            <div
              style={{
                padding: 24,
                // minHeight: 360,
                background: "white",
                borderRadius: 5,
              }}
            >
              <Row gutter={12}>
                <Col span={24}>
                  <Card style={{ marginBottom: 10 }}>
                    <Chart />
                  </Card>
                </Col>

                <Col span={7}>
                  <Card>
                    <Customer />
                  </Card>
                </Col>
                <Col span={17}>
                  <Card>
                    <Customer />
                  </Card>
                </Col>
              </Row>
            </div>
            <Footer
              style={{
                textAlign: "center",
              }}
            >
              Ant Design ©2023 Created by Ant UED
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default SideBar;
