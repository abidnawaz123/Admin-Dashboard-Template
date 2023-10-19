import React from "react";
import { Layout } from "antd";
import CustomHeader from "../components/pages/header/Header";
import styles from "./style.module.scss";
import SiderBar from "../components/Sider/Sider";
import ContentSection from "../components/pages/Content/ContentSection";

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
