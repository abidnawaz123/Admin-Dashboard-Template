import React, { useState } from "react";
import { Menu } from "antd";
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
  ProjectOutlined, // Added ProjectOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MenuItems = () => {
  const [selectedKey, setSelectedKey] = useState(["1"]);
  const navigate = useNavigate();

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
      case "6": // New case for Project Details
        return navigate("project-details");
      default:
        return navigate("/");
    }
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
    {
      key: "6", // New menu item
      icon: <ProjectOutlined />,
      label: "Project Details",
    },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <Menu
        defaultSelectedKeys={selectedKey}
        mode="inline"
        items={items}
        onClick={handleMenuItemClick}
      />
    </div>
  );
};

export default MenuItems;