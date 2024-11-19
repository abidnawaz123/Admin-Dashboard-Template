import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Chart from "../../components/Chart/Chart";
import BottomTable from "../../components/Section/Table/BottomTable";
import styles from "./style.module.scss";
import { CREATED_BY } from "../../utils/constants";
import { socialMedia, Columns } from "./dashboardUtils";

const Dashboard = () => {
    return (
        <Content>
            <div className={styles.contentSectionWrapper}>
                <Row>
                    <Col span={24}>
                        <Chart />
                    </Col>
                </Row>
                <Row gutter={10}>
                    {Columns.map((item, index) => {
                        return (
                            <Col key={index} flex={item.flex} sm={24} md={24} lg={24}>
                                {item.children}
                            </Col>
                        );
                    })}
                </Row>
                <BottomTable />
            </div>
            <Card className={styles.footerCard}>
                <Footer className={styles.footer}>
                    <Typography>{CREATED_BY}</Typography>
                    <div className={styles.socialIcons}>
                        {socialMedia.map((social, ind) => {
                            return <img key={ind} src={social.source} alt={social.alt} />;
                        })}
                    </div>
                </Footer>
            </Card>
        </Content>
    );
};

export default Dashboard;
