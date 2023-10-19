import React from "react";
import { Menu } from "antd";
import styles from "./style.module.scss";
import { SubMenu1, SubMenu2 } from "./SubMenu/Submenu";
import { CustomImg } from "../../utils/images";
import { COMPONENTS, DOCS, MESSAGES, OVERVIEW } from "../../utils/constants";

const MenuItems = () => {
  const defaultSelectedKeys = "sub2";

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

  return (
    <>
      <Menu
        className={styles.overviewMenu}
        items={[OVERVIEW].map((item, ind) => {
          const key = ind + 1;
          return {
            key: key,
            label: item,
            icon: <img src={CustomImg.OverViewIcon} alt="img" />,
          };
        })}
      />
      <Menu
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={["sub2"]}
        mode="inline"
        expandIcon={customExpandIcon}
      >
        {/*SubMenu 1*/}
        {SubMenu1}
        <Menu
          className={styles.MenuItems}
          items={[MESSAGES].map((item, ind) => {
            const key = ind + 1;
            return {
              key: key,
              label: item,
              icon: <img src={CustomImg.InBoxIcon} alt="img" />,
            };
          })}
        />
        {/*SubMenu 2*/}
        {SubMenu2}
        <hr color="#E5E7EB" />
      </Menu>
      <Menu
        items={SoloMenuItems.map((item, ind) => {
          const key = ind + 1;
          return {
            key: key,
            label: item.label,
            icon: item.icon,
          };
        })}
      />
    </>
  );
};

export default MenuItems;
