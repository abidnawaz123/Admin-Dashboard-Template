import React from "react";
import { Avatar, Divider } from "antd";
import styles from "./style.module.scss";
import Neil from "../../../assets/Avatars/Neil.svg";
import UIKit from "../../../assets/Avatars/Bonnie.svg";
import Karen from "../../../assets/Avatars/Karen.svg";
import Lana from "../../../assets/Avatars/Lana.svg";
import Micheal from "../../../assets/Avatars/Micheal.svg";
import Thomas from "../../../assets/Avatars/Thomas.svg";

const Customer = () => {
  const CustomersList = [
    {
      name: "Neil Sims",
      email: "email@example.com",
      price: "$347",
      img: <img src={Neil} alt="img" />,
    },
    {
      name: "Bonnie Green",
      email: "email@example.com",
      price: "$67",
      img: <img src={UIKit} alt="img" />,
    },
    {
      name: "Micheal Gough",
      email: "email@example.com",
      price: "$3467",
      img: <img src={Karen} alt="img" />,
    },
    {
      name: "Thomas Lean",
      email: "email@example.com",
      price: "$2367",
      img: <img src={Lana} alt="img" />,
    },
    {
      name: "Lana Byrd",
      email: "email@example.com",
      price: "$367",
      img: <img src={Micheal} alt="img" />,
    },
    {
      name: "Karen Nelson",
      email: "email@example.com",
      price: "$1347",
      img: <img src={Thomas} alt="img" />,
    },
  ];

  return (
    <div>
      <header>
        <h2>Latest Customers</h2>
      </header>
      {CustomersList.map((items, ind) => {
        return (
          <>
            <div className={styles.mainWrapper}>
              <Avatar src={items.img} className={styles.avatar} />
              <div className={styles.rows}>
                <h3>{items.name}</h3>
                <div className={styles.customRow}>
                  <p className={styles.email}>{items.email}</p>
                  <h3>{items.price}</h3>
                </div>
              </div>
            </div>
            <Divider />
          </>
        );
      })}
    </div>
  );
};

export default Customer;
