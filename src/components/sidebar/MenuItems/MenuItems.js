import React, { useState } from 'react';
import { Divider, Menu } from 'antd';
import styles from "./style.module.scss";
// import { OverViewIcon, PagesIcon, ShoppingBagIcon, InBoxIcon } from "../../../assets/Icons"
import OverViewIcon from "../../../assets/Icons/chartpie.svg";
import PagesIcon from "../../../assets/Icons/documentreport.svg";
import ShoppingBagIcon from "../../../assets/Icons/shoppingbag.svg";
import InBoxIcon from "../../../assets/Icons/inboxin.svg"
import LockIcon from "../../../assets/Icons/lock-closed.svg"
import ClipBoardIcon from "../../../assets/Icons/clipboardlist.svg"
import CollectionIcon from "../../../assets/Icons/collection.svg"
import SupportIcon from "../../../assets/Icons/support.svg"

import ChevronUp from "../../../assets/Icons/chevron-up.svg"
import ChevronDown from "../../../assets/Icons/chevron-down.svg"
import SubMenu from 'antd/es/menu/SubMenu';
import { SubMenuItemsStyle } from './commonStyle';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const MenuItems = () => {
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(['sub2']);


    const sidebarMenuList = [
        { label: "Pages", icon: <img src={PagesIcon} /> },
        { label: "Sales", icon: <img src={ShoppingBagIcon} /> },
        { label: "Messages", icon: <img src={InBoxIcon} /> },
        { label: "Authentication", icon: <img src={LockIcon} /> },
    ]
    const subMenuLabels = [
        { label: "Product List" },
        { label: "Billing" },
        { label: "Invoice" },

    ]
    const MenuItem = sidebarMenuList.map((items, index) => {
        const key = index + 1
        return {
            key: key,
            label: items.label,
            icon: items.icon,
            children: subMenuLabels.map((item, ind) => {
                const subKey = ind + 1;
                return {
                    label: item.label
                }
            })
        }
    })
    const items2 = ["UserOutlined", "LaptopOutlined", "NotificationOutlined"].map(
        (icon, index) => {
            const key = String(index + 1);
            return {
                key: `sub${key}`,
                icon: React.createElement(icon),
                label: `subnav ${key}`,

                children: new Array(4).fill(null).map((_, j) => {
                    const subKey = index * 4 + j + 1;
                    return {
                        key: subKey,
                        label: `option${subKey}`,
                    };
                }),
            };
        }
    );
    const customExpandIcon = ({ isOpen }) => {
        return isOpen ? <img src={ChevronUp} /> : <img src={ChevronDown} />;
    };

    return (
        <>
            <Menu
                className={styles.overviewMenu}
                items={["Overview"].map((item, ind) => {
                    const key = ind + 1
                    return {
                        key: key,
                        label: item,
                        icon: <img src={OverViewIcon} />
                    }
                })}
            />
            <Menu
                defaultSelectedKeys={defaultSelectedKeys}
                defaultOpenKeys={['sub2']}
                mode="inline"
                expandIcon={customExpandIcon}
            >
                <SubMenu key="sub1" openIcon={<SettingOutlined />} icon={<img src={PagesIcon} />} style={SubMenuItemsStyle} title="Pages">
                    <Menu.Item className={styles.submenuLabels} key="1">Product List</Menu.Item>
                    <Menu.Item className={styles.submenuLabels} key="2">Billing</Menu.Item>
                    <Menu.Item className={styles.submenuLabels} key="3">Invoice</Menu.Item>
                </SubMenu>
                <SubMenu style={SubMenuItemsStyle} key="sub2" icon={<img src={ShoppingBagIcon} />} title="Sales">
                    <Menu.Item className={styles.submenuLabels} key="4">Product List</Menu.Item>
                    <Menu.Item className={styles.submenuLabels} key="5">Billing</Menu.Item>
                    <Menu.Item className={styles.submenuLabels} key="6">Invoice</Menu.Item>
                </SubMenu>
                <Menu
                    className={styles.MenuItems}
                    items={["Messages"].map((item, ind) => {
                        const key = ind + 1
                        return {
                            key: key,
                            label: item,
                            icon: <img src={InBoxIcon} />
                        }
                    })}
                />
                <SubMenu style={SubMenuItemsStyle} key="sub4" icon={<img src={LockIcon} />} title="Authentication">
                    <Menu.Item className={styles.submenuLabels} key="7">Product List</Menu.Item>
                    <Menu.Item className={styles.submenuLabels} key="8">Billing</Menu.Item>
                    <Menu.Item className={styles.submenuLabels} key="9">Invoice</Menu.Item>
                </SubMenu>
            </Menu>
            <Divider />
            <Menu
                className={styles.MenuItems}
                items={["Docs"].map((item, ind) => {
                    const key = ind + 1
                    return {
                        key: key,
                        label: item,
                        icon: <img src={ClipBoardIcon} />
                    }
                })}
            />
            <Menu
                className={styles.MenuItems}
                items={["Components"].map((item, ind) => {
                    const key = ind + 1
                    return {
                        key: key,
                        label: item,
                        icon: <img src={CollectionIcon} />
                    }
                })}
            />
            <Menu
                className={styles.MenuItems}
                items={["Help"].map((item, ind) => {
                    const key = ind + 1
                    return {
                        key: key,
                        label: item,
                        icon: <img src={SupportIcon} />
                    }
                })}
            />
        </>
    )
}

export default MenuItems