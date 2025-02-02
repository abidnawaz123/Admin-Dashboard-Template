import React, { useState } from "react";
import { Menu } from "antd";
import { CustomImg } from "../../utils/images";
import { COMPONENTS, DOCS, MESSAGES, OVERVIEW } from "../../utils/constants";
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MenuItems = () => {
  const defaultSelectedKeys = "sub2";
  const navigate = useNavigate();

  const customExpandIcon = ({ isOpen }) => {
    return isOpen ? (
      <img src={CustomImg.ChevronUp} alt="img" />
    ) : (
      <img src={CustomImg.ChevronDown} alt="img" />
    );
  };

  const SoloMenuItems = [
    { label: DOCS, icon: <img src={CustomImg.ClipBoardIcon} alt="img" /> },
    {
      label: COMPONENTS,
      icon: <img src={CustomImg.CollectionIcon} alt="img" />,
    },
    { label: "Help", icon: <img src={CustomImg.SupportIcon} alt="img" /> },
  ];

  const [collapsed, setCollapsed] = useState(false);

  const [selectedKey, setSelectedKey] = useState(["1"]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Dashboard",
    },
    {
      key: "2",
      icon: <DesktopOutlined />,
      label: "Kanban",
    },
    {
      key: "3",
      icon: <ContainerOutlined />,
      label: "Profile Settings",
    },
    {
      key: "4",
      icon: <ContainerOutlined />,
      label: "More",
    },
    {
      key: "5",
      icon: <ContainerOutlined />,
      label: "Option 5",
    },
  ];

  const handleMenuItemClick = (item) => {
    setSelectedKey([item.key]);
    switch (item.key) {
      case "1":
        return navigate("/");
      case "2":
        return navigate("kanban/");
      case "3":
        return navigate("settings/");
      case "4":
        return;
      case "5":
        return navigate("theme");
      default:
        return navigate("/");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Menu
        defaultSelectedKeys={selectedKey}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        // theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={handleMenuItemClick}
      />
    </div>
  );
};

export default MenuItems;
