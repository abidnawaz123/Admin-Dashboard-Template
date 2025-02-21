import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./style.css";
import {
  Avatar,
  Card,
  DatePicker,
  Divider,
  Dropdown,
  Input,
  Modal,
  Row,
  Space,
  Typography,
} from "antd/es";

import dayjs from "dayjs";
import TicketDetailsModal from "./TicketDetailsModal/TicketDetailsModal";
import { getColumnHeaderColors } from "./commons";
import { Content } from "antd/es/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { DownOutlined, FileOutlined, TeamOutlined } from "@ant-design/icons";


const COLUMN_ORDER = [
  { id: 1, columnName: "open" },
  { id: 2, columnName: "inProgress" },
  { id: 3, columnName: "completed" },
  { id: 4, columnName: "closed" },
  { id: 5, columnName: "inReview" },
];

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [taskDetail, setTaskDetail] = useState(null);

  const [addTicketModal, setAddTicketModal] = useState(false);
  const [showDescriptionPanel, setShowDescriptionPanel] = useState(false);

  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state?.profile?.userDetail);
  const tickets = useSelector((state) => state?.tickets?.ticketsDetails);

  useEffect(() => {
    if (tickets?.tickets) {
      const groupedTasks = tickets?.tickets.reduce((acc, task) => {
        const statusKey = task.status; // Extract status
        if (!acc[statusKey]) {
          acc[statusKey] = []; // Initialize if not present
        }
        acc[statusKey].push(task);
        return acc;
      }, {});

      setTasks(groupedTasks);
    }
  }, [tickets]);

  useEffect(() => {
    dispatch({ type: "GET_USER_DETAIL_REQUEST" });
  }, []);

  useEffect(() => {
    if (userProfile?.userDetail) {
      dispatch({
        type: "GET_ASSIGNED_TICKETS_REQUEST",
        payload: userProfile?.userDetail?.id,
      });
    }
  }, [userProfile]);

  const onDragEnd = (result) => {
    const draggableID = Number(result?.draggableId);
    if (!result.destination) return;
    dispatch({
      type: "UPDATE_TICKET_REQUEST",
      payload: {
        id: draggableID,
        user_id: userProfile?.userDetail?.id,
        data: {
          status: result.destination.droppableId,
        },
      },
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const dateFormat = "YYYY/MM/DD";

  const items = [
    {
      label: (
        <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
          Person 1
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
          Person 2
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'Person 3',
      key: '3',
    },
  ];

  return (
    <Content>
      <div
        style={{
          height: "calc(100vh - 70px)",
          overflow: "auto",
        }}
      >
        <div style={{
          textAlign: "right",
          padding: 10,
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}>
          <Button
            style={{
              backgroundColor: "purple",
              color: "white",
            }}
            onClick={() => setAddTicketModal(prevState => !prevState)}
          >Add Task</Button>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="kanban-board">
            {tasks &&
              COLUMN_ORDER.map((column) => {
                const columnTasks = tasks[column.columnName] || []; // Handle empty columns gracefully
                return (
                  <Droppable key={column.id} droppableId={column.columnName}>
                    {(provided) => (
                      <div
                        className="column"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        <h4
                          style={{
                            backgroundColor: getColumnHeaderColors(
                              column.columnName.toUpperCase()
                            ),
                            padding: "5px 5px",
                            borderRadius: 5,
                            color: "white",
                            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          {column.columnName.toUpperCase()}
                        </h4>
                        {columnTasks.map((task, index) => (
                          <div
                            key={task.id}
                            onClick={() => {
                              setTaskDetail({
                                task_id: task.id,
                                task,
                                column: column.columnName,
                                columnTasks,
                                index,
                              });
                              setModalOpen(true);
                            }}
                          >
                            <Draggable
                              key={task.id}
                              draggableId={`${task.id}`}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="task"
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      justifyContent: "space-between",
                                      height: "100%",
                                    }}
                                  >
                                    <div>
                                      <p>
                                        <strong>{`Ticket-${task.number}:`}</strong>{" "}
                                        {task.heading}
                                      </p>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-around",
                                      }}
                                    >
                                      <Avatar>U</Avatar>
                                      <DatePicker
                                        size="small"
                                        style={{
                                          width: "110px",
                                        }}
                                        disabled
                                        defaultValue={dayjs(
                                          "2015/01/01",
                                          dateFormat
                                        )}
                                        format={dateFormat}
                                      />
                                      <p>normal</p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          </div>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                );
              })}
          </div>
        </DragDropContext>
        <Modal
          width="100%"
          open={modalOpen}
          onCancel={handleCloseModal}
          title="Detail of the task"
          style={{
            top: 10,
            height: "calc(100vh - 20px)",
          }}
          footer={false}
        >
          <TicketDetailsModal taskDetail={taskDetail} columns={COLUMN_ORDER} />
        </Modal>

        <Modal
          open={addTicketModal}
          onCancel={() => { setAddTicketModal(false) }}
          title={<div style={{
            padding: "10px 10px 0 10px"
          }}>Add New Tasks</div>}
          style={{
            top: 10,
            height: "calc(100vh - 20px)",
            padding: 0,
          }}
          footer={
            <>
              <Divider />
              <Row style={{
                justifyContent: "flex-end",
                padding: "10px"
              }}>
                <Button type="primary">Create Task</Button>
              </Row>
            </>
          }
        >
          <div style={{
            padding: 20
          }}>
            <Input type="text" />
            <Row style={{
              gap: 10,
              cursor: "pointer",
              padding: "10px 0",
              userSelect: "none"
            }}
              onClick={() => { setShowDescriptionPanel(prevState => !prevState) }}
            >
              <FileOutlined />
              <Typography>Add Description</Typography>
            </Row>
            {showDescriptionPanel &&
              <TextArea
                rows={10} placeholder="Write something here regarding your ticket" />
            }

            <div style={{
              padding: "10px 0",
            }}>
              <Dropdown
                menu={{ items }}
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Button icon={<TeamOutlined />}>Assignee</Button>
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </Modal>
      </div>
    </Content>
  );
};

export default KanbanBoard;
