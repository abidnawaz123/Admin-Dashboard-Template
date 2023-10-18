import React from "react";
import { Avatar, Card, Divider } from "antd";
import styles from "./style.module.scss";
import Neil from "../../../assets/Avatars/Neil.svg";
import UIKit from "../../../assets/Avatars/Bonnie.svg";
import Karen from "../../../assets/Avatars/Karen.svg";
import Lana from "../../../assets/Avatars/Lana.svg";
import Micheal from "../../../assets/Avatars/Micheal.svg";
import Thomas from "../../../assets/Avatars/Thomas.svg";

const Customer = () => {
  return (
    <div>
      <header>
        <h2>Latest Customers</h2>
      </header>
      <div className={styles.mainWrapper}>
        <Avatar src={Neil} style={{ width: 37 }} />
        <div className={styles.rows}>
          <h3 style={{ margin: 0 }}>Neil Sims</h3>
          <div className={styles.customRow}>
            <p className={styles.email}>email@example.com</p>
            <h3>$367</h3>
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles.mainWrapper}>
        <Avatar src={UIKit} style={{ width: 37 }} />
        <div className={styles.rows}>
          <h3 style={{ margin: 0 }}>Bonnie Green</h3>
          <div className={styles.customRow}>
            <p className={styles.email}>email@example.com</p>
            <h3>$67</h3>
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles.mainWrapper}>
        <Avatar src={Karen} style={{ width: 37 }} />
        <div className={styles.rows}>
          <h3 style={{ margin: 0 }}>Micheal Gough</h3>
          <div className={styles.customRow}>
            <p className={styles.email}> email@example.com</p>
            <h3>$3467</h3>
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles.mainWrapper}>
        <Avatar src={Lana} style={{ width: 37 }} />
        <div className={styles.rows}>
          <h3 style={{ margin: 0 }}>Thomas Lean</h3>
          <div className={styles.customRow}>
            <p className={styles.email}>email@example.com</p>
            <h3>$2367</h3>
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles.mainWrapper}>
        <Avatar src={Micheal} style={{ width: 37 }} />
        <div className={styles.rows}>
          <h3 style={{ margin: 0 }}>Lana Byrd</h3>
          <div className={styles.customRow}>
            <p className={styles.email}>email@example.com</p>
            <h3>$367</h3>
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles.mainWrapper}>
        <Avatar src={Thomas} style={{ width: 37 }} />
        <div className={styles.rows}>
          <h3 style={{ margin: 0 }}>Karen Nelson</h3>
          <div className={styles.customRow}>
            <p className={styles.email}>email@example.com</p>
            <h3>$1367</h3>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Customer;
