import React from "react";
import ReactEChart from "echarts-for-react";
import AlertIcon from "../../assets/Icons/alert.svg";
import { Card } from "antd";
import { option } from "./options";
import styles from "./style.module.scss";

const Chart = () => {
  
  return (
    <Card className={styles.mainCard}>
      <div className={styles.chartmainWrapper}>
        <div className={styles.chartHeader}>
          Sales <img src={AlertIcon} alt="img" />
        </div>
        <ReactEChart option={option} className={styles.chart} />
      </div>
    </Card>
  );
};

export default Chart;
