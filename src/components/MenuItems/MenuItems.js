import React from "react";
import { Menu } from "antd";
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const MenuItems = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the selected key based on current path
  const getSelectedKey = (pathname) => {
    if (pathname.includes("kanban")) return ["2"];
    if (pathname.includes("settings")) return ["3"];
    if (pathname.includes("theme")) return ["4"];
    if (pathname.includes("project-details")) return ["5"];
    return ["1"]; // Default to Dashboard
  };

  const selectedKey = getSelectedKey(location.pathname);

  const handleMenuItemClick = (item) => {
    switch (item.key) {
      case "1":
        return navigate("/");
      case "2":
        return navigate("/kanban");
      case "3":
        return navigate("/settings");
      case "4":
        return navigate("/theme");
      case "5":
        return navigate("/project-details");
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
      label: "Option 5",
    },
    {
      key: "5",
      icon: <ProjectOutlined />,
      label: "Projects",
    },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <Menu
        selectedKeys={selectedKey}
        mode="inline"
        items={items}
        onClick={handleMenuItemClick}
      />
    </div>
  );
};

export default MenuItems;
