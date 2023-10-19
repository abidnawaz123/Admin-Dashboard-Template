import React from "react";
import { Header } from "antd/es/layout/layout";
import { Avatar, Input } from "antd";
import styles from "./style.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { CustomImg } from '../../../utils/images';

const CustomHeader = () => {
  return (
    <Header className={styles.topHeader}>
      <div className={styles.header}>
        <img src={CustomImg.Logo} alt="img" width={35} height={33} />
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search"
          className={styles.inputField}
        />
      </div>
      <div className={styles.topAvatar}>
        <img src={CustomImg.BellIcon} alt="img" />
        <Avatar size="large" src={CustomImg.HeaderAvatar} />
      </div>
    </Header>
  );
};

export default CustomHeader;
