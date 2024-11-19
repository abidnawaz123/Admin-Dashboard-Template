import { Layout } from 'antd';
import React from 'react';
import CustomHeader from '../components/header/Header';
import styles from "./style.module.scss";
import { Outlet } from 'react-router-dom';
import SiderBar from '../components/Sider/Sider';

const RootLayout = () => {
    return (
        <Layout>
            <CustomHeader />
            <Layout className={styles.menuIconButton}>
                <SiderBar />
                <Outlet/>
            </Layout>
        </Layout>
    )
}

export default RootLayout
