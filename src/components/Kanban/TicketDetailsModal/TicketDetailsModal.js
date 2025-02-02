import {
  CaretRightOutlined,
  CheckOutlined,
  FlagFilled,
  FlagOutlined,
  ManOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Divider, Dropdown, Space, Tag } from "antd";
import {
  Avatar,
  Button,
  Col,
  DatePicker,
  Modal,
  Row,
  Typography,
  Input,
} from "antd/es";
import dayjs from "dayjs";
import { useState } from "react";
import TicketDetailPageTabs from "../TickerDetailPageTabs/TicketDetailPageTabs";
import { getColumnHeaderColors } from "../commons";

const { TextArea } = Input;

const TicketDetailsModal = ({ tasks, ticketDetail }) => {
  const menuItems = Object.keys(tasks);
  const [selectedKey, setSelectedKey] = useState("");
  const [commentText, setCommentText] = useState("");
  const [allComments, setAllComments] = useState([]);

  const items = menuItems.map((item, index) => ({
    key: (index + 1).toString(),
    label: (
      <div
        style={{
          width: "200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => {
          setSelectedKey((index + 1).toString());
        }}
      >
        <p>{item.toUpperCase()}</p>{" "}
        {selectedKey === (index + 1).toString() ? <CheckOutlined /> : null}
      </div>
    ),
  }));

  return (
    <>
      <Row>
        <Col
          xs={24}
          md={15}
          style={{ overflow: "auto", height: "calc(100vh - 130px)" }}
        >
          <div
            style={{
              padding: "0 20px",
              // boxShadow: "0 0px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p style={{ fontSize: 20 }}>
              Hello this is ticket number{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {ticketDetail?.task?.content}
              </span>
            </p>
            <Row gutter={20} align="middle">
              <Col xs={24} md={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <p>Status </p>
                  <Dropdown
                    menu={{
                      items,
                      selectable: true,
                      selectedKeys: selectedKey,
                    }}
                    trigger={["click"]}
                  >
                    <Button
                      style={{
                        backgroundColor: getColumnHeaderColors(
                          menuItems[selectedKey - 1]
                        ),
                        color: "white",
                      }}
                      icon={<CaretRightOutlined />}
                    >
                      {selectedKey
                        ? menuItems[selectedKey - 1].toUpperCase()
                        : ticketDetail?.columnId &&
                          ticketDetail?.columnId.toUpperCase()}
                    </Button>
                  </Dropdown>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <UserOutlined />
                    <p>Assignees</p>
                  </div>
                  <Avatar>U</Avatar>
                </div>
              </Col>

              <Col xs={24} md={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <p>Dates </p>
                  <DatePicker
                    defaultValue={dayjs("2015/01/01", "YYYY/MM/DD")}
                    format={"YYYY/MM/DD"}
                  />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <FlagOutlined />
                    <p>Priority</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <FlagFilled
                      style={{
                        color: "green",
                        fontSize: "20px",
                      }}
                    />
                    <p>Normal</p>
                  </div>
                </div>
              </Col>

              <Col xs={24} md={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <p>Time Estimate </p>
                  <p>1h</p>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <UserOutlined />
                    <p>Tags</p>
                  </div>
                  <div>
                    <Tag color="red-inverse">bug fix</Tag>
                    <Tag color="blue-inverse">feature</Tag>
                    <Tag color="gold">gold</Tag>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div style={{ margin: " 10px 20px 10px 0" }}>
            <TextArea rows={10} />
          </div>

          <TicketDetailPageTabs />
        </Col>

        <Col xs={24} md={9}>
          <div
            style={{
              padding: " 0 20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "calc(100vh - 130px)",
            }}
          >
            <div>
              <h2>Activity</h2>
              <p>. Yaqoob Aslam added watcher: you </p>
              {allComments.map((item) => (
                <p>{item}</p>
              ))}
            </div>
            <Space.Compact
              style={{
                width: "100%",
              }}
            >
              <Input
                placeholder="Write a comment..."
                size="large"
                onChange={(event) => setCommentText(event.target.value)}
                value={commentText}
              />
              <Button
                size="large"
                type="primary"
                onClick={() => {
                  setAllComments((prevState) => [...prevState, commentText]);
                  setCommentText("");
                }}
              >
                Submit
              </Button>
            </Space.Compact>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default TicketDetailsModal;
