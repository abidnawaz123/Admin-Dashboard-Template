import React from "react";
import { Layout } from "antd";
import CustomHeader from "./header/Header";
import styles from "./style.module.scss";
import SiderBar from "./Sider/Sider";
import ContentSection from "./Dashboard/Content";

const MainLayout = () => {
  return (
    <Layout>
      <CustomHeader />
      <Layout className={styles.menuIconButton}>
        <SiderBar />
        <ContentSection />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
