import React from "react";
import { Card, Col, Layout, Row, Typography } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import CustomHeader from "../header/Header";
import styles from "./style.module.scss";
import Chart from "../Chart/Chart";
import Customer from "../Section/Customer/Customer";
import ProductList from "../Section/Product/Product";
import BottomTable from "../Section/Table/BottomTable";
import FacebookIcon from "../../assets/SocialIcons/facebook.svg";
import TwitterIcon from "../../assets/SocialIcons/twitter.svg";
import GithubIcon from "../../assets/SocialIcons/github.svg";
import DribbleIcon from "../../assets/SocialIcons/dribble.svg";
import SiderBar from "../../Layout/Sider/Sider";

const SideBar = () => {
  return (
    <>
      <Layout>
        <CustomHeader />
        <Layout className={styles.menuIconButton}>
          <SiderBar />
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
                <Col
                  flex={2}
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  style={{ marginBottom: "1rem" }}
                >
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
              <BottomTable />
            </div>
            <Card className={styles.footerCard}>
              <Footer className={styles.footer}>
                <Typography>
                  Created By <b>Abid Nawaz</b> at <b>Enigmatix</b> in Year ©2023
                </Typography>
                <div className={styles.socialIcons}>
                  <img src={FacebookIcon} />
                  <img src={TwitterIcon} />
                  <img src={GithubIcon} />
                  <img src={DribbleIcon} />
                </div>
              </Footer>
            </Card>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default SideBar;
