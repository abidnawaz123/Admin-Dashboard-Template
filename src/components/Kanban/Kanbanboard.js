import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import "./style.css";
import { Button, Modal, Typography } from "antd/es";
import { CaretRightOutlined } from "@ant-design/icons"
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const initialTasks = {
    open: [
        { id: 'task-4', content: 'Task 4' },
        { id: 'task-5', content: 'Task 5' },

    ],

    inProgress: [
        { id: "task-3", content: "Task 3" }
    ],
    completed: [],
    closed: [
        { id: "task-1", content: "Task 1" },
        { id: "task-2", content: "Task 2" },
    ],
};

const getColumnHeaderColors = (columnHeaderName) => {
    switch (columnHeaderName) {
        case "open":
            return "grey"
        case "inProgress":
            return "pink"
        case "pending":
            return "#FFC53D"
        case "completed":
            return "green"
        case "closed":
            return "red"
        default:
            return "white"
    }
}


const items = [
    // Object.entries(tasks).map(([columnId, columnTasks]) => ())

    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];

const KanbanBoard = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [modalOpen, setModalOpen] = useState(false);
    const [ticketDetail, setTicketDetail] = useState(null);

    console.log("ticketDetail", ticketDetail);

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
        setModalOpen(false)
    }

    const { Title } = Typography;


    return (
        <div style={{
            height: "calc(100vh - 70px)",
            overflow: "auto",
        }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="kanban-board">
                    {Object.entries(tasks).map(([columnId, columnTasks]) => (
                        <Droppable key={columnId} droppableId={columnId}>
                            {(provided) => (
                                <div className="column"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <h4 style={{
                                        backgroundColor: getColumnHeaderColors(columnId),
                                        padding: "5px 5px",
                                        borderRadius: 5,
                                        color: "white",
                                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                    }}>{columnId.toUpperCase()}</h4>
                                    {columnTasks.map((task, index) => (
                                        <div onClick={() => {
                                            setModalOpen(true)
                                            setTicketDetail({
                                                columnId, columnTasks, task
                                            })
                                        }}>
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="task"
                                                    >
                                                        {task.content}
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
            >
                <p style={{ fontSize: 20 }}>
                    Hello this is ticket number <span style={{
                        fontWeight: "bold"
                    }}>{ticketDetail?.task?.content}</span>
                </p>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    <Space>
                        <h3>Status: {" "}
                            <Button icon={<CaretRightOutlined />}>
                                {ticketDetail?.columnId && ticketDetail?.columnId.toUpperCase()}
                            </Button>
                        </h3>
                    </Space>
                </Dropdown>
            </Modal>
        </div>
    );
};

export default KanbanBoard;
