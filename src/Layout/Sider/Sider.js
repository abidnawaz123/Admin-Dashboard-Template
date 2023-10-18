import React from "react";
import Sider from "antd/es/layout/Sider";
import AdjustmentIcon from "../../assets/Icons/adjustments.svg";
import GlobeIcon from "../../assets/Icons/globe.svg";
import SettingIcon from "../../assets/Icons/setting.svg";
import MenuItems from "../../components/sidebar/MenuItems/MenuItems";
import MenuIcon from "../../assets/Icons/Menu.svg";
import styles from "./style.module.scss";

const SiderBar = () => {
  return (
    <Sider
      width={250}
      theme="light"
      breakpoint="md"
      collapsedWidth="0"
      trigger={<img src={MenuIcon} alt="menuIcon" />}
    >
      {/* <div className="demo-logo-vertical" /> */}
      <MenuItems />
      <div className={styles.iconsDiv}>
        <img src={AdjustmentIcon} alt="img"/>
        <img src={GlobeIcon} alt="img"/>
        <img src={SettingIcon} alt="img"/>
      </div>
    </Sider>
  );
};

export default SiderBar;
