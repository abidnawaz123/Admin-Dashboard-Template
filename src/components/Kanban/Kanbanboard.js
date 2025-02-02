import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./style.css";
import {
  Avatar,
  Button,
  Col,
  DatePicker,
  Modal,
  Row,
  Typography,
} from "antd/es";

import dayjs from "dayjs";
import TicketDetailsModal from "./TicketDetailsModal/TicketDetailsModal";
import { getColumnHeaderColors } from "./commons";
import { Content } from "antd/es/layout/layout";

const initialTasks = {
  open: [
    { id: "task-4", content: "Task 4" },
    { id: "task-5", content: "Task 5" },
  ],

  inProgress: [{ id: "task-3", content: "Task 3" }],
  completed: [],
  closed: [
    { id: "task-1", content: "Task 1" },
    { id: "task-2", content: "Task 2" },
  ],
  inReview: [
    { id: "task-6", content: "Task 6" },
    { id: "task-7", content: "Task 7" },
  ],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [modalOpen, setModalOpen] = useState(false);
  const [ticketDetail, setTicketDetail] = useState(null);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];

    // Remove item from source
    const [movedTask] = sourceColumn.splice(source.index, 1);

    // Add item to destination
    destColumn.splice(destination.index, 0, movedTask);

    setTasks({ ...tasks });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const dateFormat = "YYYY/MM/DD";

  return (
    <Content>
      <div
        style={{
          height: "calc(100vh - 70px)",
          overflow: "auto",
        }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="kanban-board">
            {Object.entries(tasks).map(([columnId, columnTasks]) => (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided) => (
                  <div
                    className="column"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <h4
                      style={{
                        backgroundColor: getColumnHeaderColors(columnId),
                        padding: "5px 5px",
                        borderRadius: 5,
                        color: "white",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {columnId.toUpperCase()}
                    </h4>
                    {columnTasks.map((task, index) => (
                      <div
                        onClick={() => {
                          setModalOpen(true);
                          setTicketDetail({
                            columnId,
                            columnTasks,
                            task,
                          });
                        }}
                      >
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
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
                                  <p>{task.content}</p>
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
            ))}
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
          <TicketDetailsModal tasks={tasks} ticketDetail={ticketDetail} />
        </Modal>
      </div>
    </Content>
  );
};

export default KanbanBoard;
