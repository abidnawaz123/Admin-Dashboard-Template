import {
  CaretRightOutlined,
  CheckOutlined,
  FlagFilled,
  FlagOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Space, Tag, Tooltip } from "antd";
import { Avatar, Button, Col, DatePicker, Row, Input } from "antd/es";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import TicketDetailPageTabs from "../TickerDetailPageTabs/TicketDetailPageTabs";
import { getColumnHeaderColors } from "../commons";

const { TextArea } = Input;

const TicketDetailsModal = ({ taskDetail, columns }) => {
  console.log('taskDetail', taskDetail);

  const { column, columnTasks, index, task, task_id } = taskDetail;

  const [selectedKey, setSelectedKey] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    setSelectedKey(
      (columns.findIndex((item) => item.columnName == column) + 1).toString()
    );
  }, [taskDetail]);

  const items = columns.map((item, index) => {
    return {
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
          <p>{item.columnName.toUpperCase()}</p>{" "}
          {item.columnName === task?.status ? <CheckOutlined /> : null}
        </div>
      ),
    };
  });

  const ConvertDateToUserFriendlyTime = (givenDate) => {
    const date = new Date(givenDate);
    const formattedDate = date.toLocaleString('en-US', {
      weekday: 'long', // Long format for weekday (e.g., "Friday")
      year: 'numeric',
      month: 'long', // Long format for month (e.g., "February")
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true // Use 12-hour format (e.g., "PM")
  });

  return formattedDate;
  }

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
            }}
          >
            <p style={{ fontSize: 20 }}>
              {task?.heading}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
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
                        backgroundColor: getColumnHeaderColors(task?.status),
                        color: "white",
                      }}
                      icon={<CaretRightOutlined />}
                    >
                      {task?.status?.toUpperCase()}
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
                  {task?.assigned_employee?.map(employee => (
                    <Avatar.Group>
                      <Tooltip title={employee?.first_name} placement="top">
                        <Avatar icon={<UserOutlined />}></Avatar>
                      </Tooltip>
                    </Avatar.Group>
                  ))}

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
                    defaultValue={dayjs(task?.time_estimated, "YYYY/MM/DD")}
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
                    <p>{task?.priority}</p>
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
                  <p>Time Estimate:</p>
                  <p><b>{ConvertDateToUserFriendlyTime(task?.time_estimated)}</b></p>
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
                    {task?.tags?.map(item => (<Tag>{item}</Tag>))}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div style={{ margin: " 10px 20px 10px 0" }}>
            <TextArea rows={10} value={task?.description} readOnly />
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
