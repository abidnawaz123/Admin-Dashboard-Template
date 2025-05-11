import React, { useEffect, useState } from "react";
import { Card, Avatar, Tag, Typography, Row, Col, Statistic, Divider, Button } from "antd";
import { UserOutlined, ProjectOutlined } from "@ant-design/icons";
import "./ProjectDetails.css";
import { useDispatch, useSelector } from "react-redux";
import AddProjectModal from "./AddProjectModal/AddProjectModal";

const { Title, Text } = Typography;

const ProjectDetails = () => {

  const project_data = useSelector((state) => state?.projects?.projectDetails);

  const all_leads = useSelector((state) => state?.leads?.allLeads)
  const all_employees = useSelector((state) => state?.employees.allEmployees)
  console.log("lead is ==>", all_employees)

  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    dispatch({ type: "GET_USER_DETAIL_REQUEST" });
    dispatch({ type: "GET_ALL_LEADS_REQUEST" });
    dispatch({ type: "GET_ALL_EMPLOYEES_REQUEST" });
  }, []);

  return (
    <div className="project-details-container">
      <div>
        <Button
          type="primary"
          onClick={() => setModalVisible(true)}
        >Add New Project</Button>
      </div>
      <div className="total-projects-statistic">
        <Statistic
          title={<Text className="statistic-title">Your Company Has Total Projects</Text>}
          value={project_data?.project?.length}
          prefix={<ProjectOutlined className="statistic-icon" />}
          valueStyle={{ fontSize: "2em" }}
        />
      </div>
      <div>
        {project_data?.project?.map((project, index) => (
          <Card key={project.id} title={<Title level={3} className="project-title">{project.name}</Title>} className="project-card" >
            <div>
              <i>
                {project.description}
              </i>
            </div>

            <Row gutter={16} align="middle">
              <Col md={6} sm={24}>
                <div className="lead-card">
                  <Avatar size={64} icon={<UserOutlined />} className="lead-avatar" />
                  <Text strong className="lead-name">
                    {project.lead.name}
                  </Text>
                  {/* <Tag className={`status-tag ${project.lead.status.toLowerCase()}`}>
                      {project.lead.status}
                    </Tag> */}
                  <Text type="secondary" className="lead-label">
                    Project Lead
                  </Text>
                </div>
              </Col>
              <Col md={18} sm={24}>
                <Title level={4} className="employees-title">Employees</Title>
                {project.lead.team.length > 0 ? (
                  project.lead.team.map((employee) => {
                    return (
                      <Card key={employee.name} size="small" className={`employee-card ${employee.employee_name.toLowerCase()}`}>
                        <div style={{
                          display: "flex"
                        }}>
                          <Avatar size="small" icon={<UserOutlined />} className="employee-avatar" />
                          <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between"
                          }}>
                            <Text strong className="employee-name">
                              {employee.employee_name}
                            </Text>
                            <Tag className={`status-tag ${employee.employee_status.toLowerCase()}`}>
                              {employee.employee_status}
                            </Tag>
                          </div>
                        </div>
                      </Card>
                    )
                  })
                ) : (
                  <Text type="secondary" className="no-data">No employees assigned to this project.</Text>
                )}
              </Col>

            </Row>

          </Card>
        ))
        }
      </div>
      <AddProjectModal
        visible={isModalVisible}
        onCancel={() => setModalVisible(false)}
        all_leads={all_leads?.leads}
        all_employees={all_employees?.employees}
      />

    </div>
  );
};

export default ProjectDetails;