import React from "react";
import { Header } from "antd/es/layout/layout";
import { Avatar, Input } from "antd";
import styles from "./style.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { CustomImg } from "../../utils/images";
import { Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";

const CustomHeader = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Dashboard",
      onClick: () => navigate("/"),
      extra: "⌘P",
    },
    {
      key: "4",
      label: "Settings",
      extra: "⌘S",
      onClick: () => navigate("/settings")
    },
  ];

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
        <Dropdown
          menu={{
            items,
          }}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Space>
              <Avatar size="large" src={CustomImg.HeaderAvatar} />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default CustomHeader;
