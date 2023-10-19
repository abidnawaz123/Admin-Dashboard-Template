import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Chart from "../../Chart/Chart";
import Customer from "../../Section/Customer/Customer";
import ProductList from "../../Section/Product/Product";
import BottomTable from "../../Section/Table/BottomTable";
import styles from "./style.module.scss";
import { CustomImg } from "../../../utils/images";

const ContentSection = () => {
  return (
    <Content>
      <div className={styles.contentSectionWrapper}>
        <Row>
          <Col span={24}>
            <Chart />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col
            flex={2}
            sm={24}
            md={24}
            lg={24}
            style={{ marginBottom: "1rem" }}
          >
            <Customer />
          </Col>
          <Col flex={5} sm={24} md={24} lg={24}>
            <ProductList />
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
            <img src={CustomImg.FacebookIcon} alt="facebook" />
            <img src={CustomImg.TwitterIcon} alt="twitter" />
            <img src={CustomImg.GithubIcon} alt="github" />
            <img src={CustomImg.DribbleIcon} alt="dribble" />
          </div>
        </Footer>
      </Card>
    </Content>
  );
};

export default ContentSection;
