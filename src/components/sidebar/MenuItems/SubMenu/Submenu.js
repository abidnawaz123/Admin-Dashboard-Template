import styles from "./style.module.scss";
import React from "react";
import { Menu } from "antd";
import PagesIcon from "../../../../assets/Icons/documentreport.svg";
import ShoppingBagIcon from "../../../../assets/Icons/shoppingbag.svg";
import LockIcon from "../../../../assets/Icons/lock-closed.svg";
import SubMenu from "antd/es/menu/SubMenu";
import { SettingOutlined } from "@ant-design/icons";
import { SubMenuItemsStyle } from '../commonStyle';

export const SubMenu1 = (
  <>
    <SubMenu
      key="sub1"
      openIcon={<SettingOutlined />}
      icon={<img src={PagesIcon} alt="img"/>}
      style={SubMenuItemsStyle}
      title="Pages"
    >
      <Menu.Item className={styles.submenuLabels} key="1">
        Product List
      </Menu.Item>
      <Menu.Item className={styles.submenuLabels} key="2">
        Billing
      </Menu.Item>
      <Menu.Item className={styles.submenuLabels} key="3">
        Invoice
      </Menu.Item>
    </SubMenu>
    <SubMenu
      style={SubMenuItemsStyle}
      key="sub2"
      icon={<img src={ShoppingBagIcon} alt="img" />}
      title="Sales"
    >
      <Menu.Item className={styles.submenuLabels} key="4">
        Product List
      </Menu.Item>
      <Menu.Item className={styles.submenuLabels} key="5">
        Billing
      </Menu.Item>
      <Menu.Item className={styles.submenuLabels} key="6">
        Invoice
      </Menu.Item>
    </SubMenu>
  </>
);

export const SubMenu2 = (
  <SubMenu
    style={SubMenuItemsStyle}
    key="sub4"
    icon={<img src={LockIcon} alt="img" />}
    title="Authentication"
  >
    <Menu.Item className={styles.submenuLabels} key="7">
      Product List
    </Menu.Item>
    <Menu.Item className={styles.submenuLabels} key="8">
      Billing
    </Menu.Item>
    <Menu.Item className={styles.submenuLabels} key="9">
      Invoice
    </Menu.Item>
  </SubMenu>
);
