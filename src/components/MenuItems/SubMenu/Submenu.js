import styles from "./style.module.scss";
import React from "react";
import { Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { SettingOutlined } from "@ant-design/icons";
import { SubMenuItemsStyle } from "../../MenuItems/commonStyle";
import { CustomImg } from '../../../utils/images';

const subMenuChild = [
  { label: "Product List" },
  { label: "Billing" },
  { label: "Invoice" },
];

export const SubMenu1 = (
  <>
    <SubMenu
      key="sub1"
      openIcon={<SettingOutlined />}
      icon={<img src={CustomImg.PagesIcon} alt="img" />}
      style={SubMenuItemsStyle}
      title="Pages"
    >
      {subMenuChild.map((items, ind) => {
        return (
          <Menu.Item className={styles.submenuLabels} key={ind + 1}>
            {items.label}
          </Menu.Item>
        );
      })}
    </SubMenu>
    <SubMenu
      style={SubMenuItemsStyle}
      key="sub2"
      icon={<img src={CustomImg.ShoppingBagIcon} alt="img" />}
      title="Sales"
    >
      {subMenuChild.map((items, ind) => {
        return (
          <Menu.Item className={styles.submenuLabels} key={ind + 4}>
            {items.label}
          </Menu.Item>
        );
      })}
    </SubMenu>
  </>
);

export const SubMenu2 = (
  <SubMenu
    style={SubMenuItemsStyle}
    key="sub4"
    icon={<img src={CustomImg.LockIcon} alt="img" />}
    title="Authentication"
  >
    {subMenuChild.map((items, ind) => {
      console.log("index is -->", ind + 7);
      return (
        <Menu.Item className={styles.submenuLabels} key={ind + 4}>
          {items.label}
        </Menu.Item>
      );
    })}
  </SubMenu>
);
