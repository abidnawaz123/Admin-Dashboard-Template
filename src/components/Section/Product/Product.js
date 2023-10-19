import { Card, Divider } from "antd";
import React from "react";
import styles from "./style.module.scss";
import { products } from "./prodList";

const ProductList = () => {
  return (
    <>
      <Card>
        <header>
          <h2>Top Products</h2>
        </header>
        {products.map((items, index) => {
          return (
            <>
              <div key={index} className={styles.rowsWrapper}>
                <h3 style={{ margin: 0 }}>{items.productName}</h3>
                <div className={styles.customRow}>
                  <p>{items.about}</p>
                  <h3>
                    {items.num + " "}
                    <span className={styles.sales}>sales</span>
                  </h3>
                </div>
              </div>
              <Divider />
            </>
          );
        })}
      </Card>
    </>
  );
};

export default ProductList;
