import React from "react";
import Sider from "antd/es/layout/Sider";
import MenuItems from "../MenuItems/MenuItems";
import MenuIcon from "../../assets/Icons/Menu.svg";
import styles from "./style.module.scss";
import { CustomImg } from "../../utils/images";

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
        <img src={CustomImg.AdjustmentIcon} alt="adjust" />
        <img src={CustomImg.GlobeIcon} alt="globe" />
        <img src={CustomImg.SettingIcon} alt="setting" />
      </div>
    </Sider>
  );
};

export default SiderBar;
