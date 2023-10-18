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
import ProductList from "../Section/Product/Product";

const SideBar = () => {
  return (
    <>
      <Layout>
        <CustomHeader />
        <Layout className={styles.menuIconButton}>
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
            trigger={<img src={MenuIcon} alt="menuIcon" className={styles.menuIconImg} />}
          >
            <div className="demo-logo-vertical" />
            <MenuItems />
          </Sider>
          <Content>
            <div
              style={{
                padding: 24,
                // minHeight: 360,
                background: "#F3F4F6",
                borderRadius: 5,
              }}
            >
              <Row>
                <Col span={24}>
                  <Card style={{ marginBottom: 10 }}>
                    <Chart />
                  </Card>
                </Col>
              </Row>
              <Row gutter={10}>
                <Col flex={2} xs={24} sm={24} md={24} lg={24}>
                  <Card>
                    <Customer />
                  </Card>
                </Col>
                <Col flex={5} xs={24} sm={24} md={24} lg={24}>
                  <Card>
                    <ProductList />
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
