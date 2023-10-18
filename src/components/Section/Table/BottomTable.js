import React from "react";
import { Card,  Typography, Table, Row, Col } from "antd";
import styles from "./style.module.scss";
import { columns } from "./Source/Columns";

const BottomTable = () => {
  const data = [
    {
      key: "1",
      transaction: { paying: "Payment from", name: "Bonnie Green" },
      dateNtime: "18 Oct,2023",
      amount: "$2300",
    },
    {
      key: "2",
      transaction: { paying: "Payment refund to", name: "#00910" },
      dateNtime: "18 Oct,2023",
      amount: "$2300",
    },
    {
      key: "3",
      transaction: { paying: "Payment failed from", name: "#087651" },
      dateNtime: "18 Oct,2023",
      amount: "$2300",
    },
    {
      key: "4",
      transaction: { paying: "Payment from", name: "Bonnie Green" },
      dateNtime: "18 Oct,2023",
      amount: "$2300",
    },
    {
      key: "5",
      transaction: { paying: "Payment from", name: "Jese Leos" },
      dateNtime: "18 Oct,2023",
      amount: "$2300",
    },
    {
      key: "6",
      transaction: { paying: "Payment from", name: "THEMSBERG LLC" },
      dateNtime: "18 Oct,2023",
      amount: "$2300",
    },
  ];

  return (
    <Card style={{ marginTop: "1rem" }}>
      <Row>
        <Col span={24}>
          <Typography className={styles.topLabel}>Transactions</Typography>
          <Typography className={styles.transitionlist}>
            This is a list of latest Transactions
          </Typography>
          <Table
            className={styles.bottomTable}
            columns={columns}
            dataSource={data}
            pagination={false}
            style={{ width: "100%", overflow: "auto" }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default BottomTable;
