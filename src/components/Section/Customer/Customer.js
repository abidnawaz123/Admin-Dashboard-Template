import React from "react";
import { Avatar, Card, Divider } from "antd";
import styles from "./style.module.scss";
import { CustomersList } from "./customerList";

const Customer = () => {
  return (
    <Card>
      <header>
        <h2>Latest Customers</h2>
      </header>
      {CustomersList.map((items, _) => {
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
    </Card>
  );
};

export default Customer;
