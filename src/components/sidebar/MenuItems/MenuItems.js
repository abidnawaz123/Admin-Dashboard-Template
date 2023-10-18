import React from "react";
import { Menu } from "antd";
import styles from "./style.module.scss";
import OverViewIcon from "../../../assets/Icons/chartpie.svg";
import InBoxIcon from "../../../assets/Icons/inboxin.svg";
import ClipBoardIcon from "../../../assets/Icons/clipboardlist.svg";
import CollectionIcon from "../../../assets/Icons/collection.svg";
import SupportIcon from "../../../assets/Icons/support.svg";
import ChevronUp from "../../../assets/Icons/chevron-up.svg";
import ChevronDown from "../../../assets/Icons/chevron-down.svg";
import { SubMenu1, SubMenu2 } from "./SubMenu/Submenu";

const MenuItems = () => {
  const defaultSelectedKeys = "sub2";

  const customExpandIcon = ({ isOpen }) => {
    return isOpen ? (
      <img src={ChevronUp} alt="img" />
    ) : (
      <img src={ChevronDown} alt="img" />
    );
  };

  const SoloMenuItems = [
    { label: "Docs", icon: <img src={ClipBoardIcon} alt="img" /> },
    { label: "Components", icon: <img src={CollectionIcon} alt="img" /> },
    { label: "Help", icon: <img src={SupportIcon} alt="img" /> },
  ];

  return (
    <>
      <Menu
        className={styles.overviewMenu}
        items={["Overview"].map((item, ind) => {
          const key = ind + 1;
          return {
            key: key,
            label: item,
            icon: <img src={OverViewIcon} alt="img" />,
          };
        })}
      />
      <Menu
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={["sub2"]}
        mode="inline"
        expandIcon={customExpandIcon}
      >
        {SubMenu1}
        <Menu
          className={styles.MenuItems}
          items={["Messages"].map((item, ind) => {
            const key = ind + 1;
            return {
              key: key,
              label: item,
              icon: <img src={InBoxIcon} alt="img" />,
            };
          })}
        />
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
