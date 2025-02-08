import React from "react";
import { Card, Typography, Row, Col, Button, Divider, Tag } from "antd";
import {
  UserOutlined,
  ProjectOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  MailOutlined,
  IdcardOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Content } from "antd/es/layout/layout";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

const WelcomePage = ({ firstName, lastName }) => {
  // Static employee and project data
  const employee = {
    name: "John Doe",
    employeeId: "E12345",
    position: "Software Engineer",
    project: "Admin Dashboard",
    manager: "Jane Smith",
    tasksCompleted: 10,
    totalTasks: 15,
    workHours: 38,
    contact: "adminforinfo@gmail.com",
    phone: "+123 456 789",
    status: "Active",
  };

  const projectDetail = useSelector((state) => state?.projects?.projectDetails);
  console.log("projectDetail now =>", projectDetail);

  return (
    <Content>
      <div>
        <Row justify="center">
          <Col xs={24}>
            <Card
              style={{
                padding: "30px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                margin: 20,
                backgroundColor: "#ffffff",
                border: "1px solid #d9d9d9",
                borderRadius: "8px",
              }}
              bordered={false}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Title
                  level={2}
                  style={{
                    textAlign: "center",
                    color: "#001529",
                    fontFamily:
                      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Welcome, {`${firstName} ${lastName}`}!
                </Title>
                <Text
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: "20px",
                    color: "#555",
                    marginBottom: "30px",
                  }}
                >
                  You’re now logged in. Here’s your dashboard overview.
                </Text>
              </motion.div>

              <Divider style={{ borderColor: "#e8e8e8", margin: "20px 0" }} />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
              >
                <Row
                  justify="start"
                  align="middle"
                  style={{ marginBottom: "15px" }}
                >
                  <ProjectOutlined
                    style={{ fontSize: "28px", color: "#52c41a" }}
                  />
                  <Title
                    level={4}
                    style={{ marginLeft: "10px", color: "#52c41a" }}
                  >
                    Current Project
                  </Title>
                </Row>
                <Text
                  style={{
                    fontSize: "18px",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  You’re working on the{" "}
                  {projectDetail?.project?.map((item) => (
                    <strong>{item.name}</strong>
                  ))}
                  . Keep up the great work!
                </Text>
                <Row
                  justify="start"
                  align="middle"
                  style={{ marginBottom: "15px" }}
                >
                  {projectDetail?.project?.map((item) => (
                    <Text>{item.description}</Text>
                  ))}
                </Row>
                <Row
                  justify="start"
                  align="middle"
                  style={{ marginBottom: "15px" }}
                >
                  <CalendarOutlined
                    style={{ fontSize: "28px", color: "#ff7a45" }}
                  />
                  <Title
                    level={4}
                    style={{ marginLeft: "10px", color: "#ff7a45" }}
                  >
                    Tasks Completed
                  </Title>
                </Row>
                <Text
                  style={{
                    fontSize: "18px",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Completed: <strong>{employee.tasksCompleted}</strong> /{" "}
                  {employee.totalTasks} Tasks
                </Text>

                <Row
                  justify="start"
                  align="middle"
                  style={{ marginBottom: "15px" }}
                >
                  <ClockCircleOutlined
                    style={{ fontSize: "28px", color: "#1890ff" }}
                  />
                  <Title
                    level={4}
                    style={{ marginLeft: "10px", color: "#1890ff" }}
                  >
                    Work Hours
                  </Title>
                </Row>
                <Text
                  style={{
                    fontSize: "18px",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Total Work Hours: <strong>{employee.workHours} hrs</strong>
                </Text>
              </motion.div>

              <Divider style={{ borderColor: "#e8e8e8", margin: "20px 0" }} />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              >
                <Row
                  justify="start"
                  align="middle"
                  style={{ marginBottom: "15px" }}
                >
                  <IdcardOutlined
                    style={{ fontSize: "28px", color: "#ff9c6e" }}
                  />
                  <Title
                    level={4}
                    style={{ marginLeft: "10px", color: "#ff9c6e" }}
                  >
                    Manager
                  </Title>
                </Row>
                <Text
                  style={{
                    fontSize: "18px",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Managed by:{" "}
                  {projectDetail?.project?.map((item) => (
                    <strong>{item.lead.name}</strong>
                  ))}
                </Text>

                <Row
                  justify="start"
                  align="middle"
                  style={{ marginBottom: "15px" }}
                >
                  <MailOutlined
                    style={{ fontSize: "28px", color: "#8c8c8c" }}
                  />
                  <Title
                    level={4}
                    style={{ marginLeft: "10px", color: "#8c8c8c" }}
                  >
                    Email
                  </Title>
                </Row>
                <Text
                  style={{
                    fontSize: "18px",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  {employee.contact}
                </Text>

                <Row
                  justify="start"
                  align="middle"
                  style={{ marginBottom: "15px" }}
                >
                  <PhoneOutlined
                    style={{ fontSize: "28px", color: "#8c8c8c" }}
                  />
                  <Title
                    level={4}
                    style={{ marginLeft: "10px", color: "#8c8c8c" }}
                  >
                    Phone
                  </Title>
                </Row>
                <Text
                  style={{
                    fontSize: "18px",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  {employee.phone}
                </Text>

                <Row
                  justify="start"
                  align="middle"
                  style={{ marginBottom: "15px" }}
                >
                  <Tag
                    color={employee.status === "Active" ? "green" : "red"}
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    {employee.status}
                  </Tag>
                </Row>
              </motion.div>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default WelcomePage;
