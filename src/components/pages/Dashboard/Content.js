import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Chart from "../../Chart/Chart";
import Customer from "../../Section/Customer/Customer";
import ProductList from "../../Section/Product/Product";
import BottomTable from "../../Section/Table/BottomTable";
import FacebookIcon from "../../../assets/SocialIcons/facebook.svg"
import TwitterIcon from "../../../assets/SocialIcons/twitter.svg"
import GithubIcon from "../../../assets/SocialIcons/github.svg"
import DribbleIcon from "../../../assets/SocialIcons/dribble.svg"
import styles from "./style.module.scss";

const ContentSection = () => {
  return (
    <Content>
      <div className={styles.contentSectionWrapper}>
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
            sm={24}
            md={24}
            lg={24}
            style={{ marginBottom: "1rem" }}
          >
            <Card>
              <Customer />
            </Card>
          </Col>
          <Col flex={5} sm={24} md={24} lg={24}>
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
            <img src={FacebookIcon} alt="img" />
            <img src={TwitterIcon} alt="img" />
            <img src={GithubIcon} alt="img" />
            <img src={DribbleIcon} alt="img" />
          </div>
        </Footer>
      </Card>
    </Content>
  );
};

export default ContentSection;
