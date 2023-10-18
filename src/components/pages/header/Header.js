import React from "react";
import { Header } from "antd/es/layout/layout";
import { Avatar, Input } from "antd";
import Logo from "../../../assets/Icons/Logo.svg";
import BellIcon from "../../../assets/Icons/Bell.svg";
import styles from "./style.module.scss";
import HeaderAvatar from "../../../assets/Avatars/HeaderAvtar.svg";
import { SearchOutlined } from "@ant-design/icons";

const CustomHeader = () => {
  return (
    <Header className={styles.topHeader}>
      <div className={styles.header}>
        <img src={Logo} alt="img" width={35} height={33} />
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search"
          className={styles.inputField}
        />
      </div>
      <div className={styles.topAvatar}>
        <img src={BellIcon} alt="img" />
        <Avatar size="large" src={HeaderAvatar} />
      </div>
    </Header>
  );
};

export default CustomHeader;
