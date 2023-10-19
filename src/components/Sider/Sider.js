import React from "react";
import Sider from "antd/es/layout/Sider";
import AdjustmentIcon from "../../assets/Icons/adjustments.svg";
import GlobeIcon from "../../assets/Icons/globe.svg";
import SettingIcon from "../../assets/Icons/setting.svg";
import MenuItems from "../MenuItems/MenuItems";
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
      <div className={styles.MenuItems}>
        <MenuItems />
      </div>
      <div className={styles.iconsDiv}>
        <img src={AdjustmentIcon} alt="adjust" />
        <img src={GlobeIcon} alt="globe" />
        <img src={SettingIcon} alt="setting" />
      </div>
    </Sider>
  );
};

export default SiderBar;
