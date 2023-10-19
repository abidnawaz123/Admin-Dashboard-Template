import React from "react";
import { Card, Typography, Table, Row, Col } from "antd";
import styles from "./style.module.scss";
import { columns } from "./Source/Columns";
import { data } from "./Source/Data";
import { TRANSACTIONSLIST } from "../../../utils/constants";

const BottomTable = () => {
  return (
    <Card style={{ marginTop: "1rem" }}>
      <Row>
        <Col span={24}>
          <Typography className={styles.topLabel}>Transactions</Typography>
          <Typography className={styles.transitionlist}>
            {TRANSACTIONSLIST}
          </Typography>
          <Table
            className={styles.bottomTable}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default BottomTable;
