import React from "react";
import { Card, Avatar, Tag, Typography, Row, Col, Statistic, Divider } from "antd";
import { UserOutlined, ProjectOutlined } from "@ant-design/icons";
import "./ProjectDetails.css";

const { Title, Text } = Typography;

const ProjectDetails = () => {
  // Extended and randomized dummy data
  const projectData = {
    totalProjects: 12,
    projects: [
      {
        id: 1,
        name: "Next-Gen CRM System",
        lead: { name: "Alice Johnson", status: "Active" },
        employees: [
          { name: "Bob Williams", status: "Active" },
          { name: "Charlie Brown", status: "Idle" },
          { name: "Diana Garcia", status: "Active" },
          { name: "Ethan Rodriguez", status: "Active" },
        ],
        leads: [
          { name: "Laura Smith", status: "New" },
          { name: "Kevin Jones", status: "Contacted" },
          { name: "Megan Brown", status: "Qualified" },
        ],
      },
      {
        id: 2,
        name: "AI-Powered Chatbot Integration",
        lead: { name: "Eve Davis", status: "Active" },
        employees: [
          { name: "Frank Miller", status: "Active" },
          { name: "Grace Wilson", status: "Active" },
        ],
        leads: [
          { name: "Oscar Taylor", status: "Qualified" },
          { name: "Sophia Clark", status: "New" },
        ],
      },
      {
        id: 3,
        name: "Cloud Infrastructure Migration",
        lead: { name: "Henry Moore", status: "Active" },
        employees: [
          { name: "Isabella Lewis", status: "Active" },
          { name: "Jack Hall", status: "Idle" },
          { name: "Olivia Young", status: "Active" },
          { name: "Noah Allen", status: "Active" },
          { name: "Mia King", status: "Active" },
        ],
        leads: [
          { name: "William Wright", status: "Contacted" },
        ],
      },
      {
        id: 4,
        name: "E-learning Platform Development",
        lead: { name: "Ava Green", status: "Active" },
        employees: [
          { name: "James Adams", status: "Active" },
          { name: "Charlotte Hill", status: "Active" },
        ],
        leads: [
          { name: "Benjamin Baker", status: "New" },
          { name: "Amelia Carter", status: "Qualified" },
          { name: "Samuel Mitchell", status: "Contacted" },
        ],
      },
      {
        id: 5,
        name: "Data Analytics Dashboard Upgrade",
        lead: { name: "Daniel Phillips", status: "Active" },
        employees: [
          { name: "Harper Roberts", status: "Active" },
          { name: "Elijah Turner", status: "Idle" },
          { name: "Victoria Scott", status: "Active" },
        ],
        leads: [],
      },
      {
        id: 6,
        name: "Internal Communication Tool",
        lead: { name: "Sofia Nelson", status: "Active" },
        employees: [
          { name: "Joseph Powell", status: "Active" },
          { name: "Natalie Long", status: "Active" },
          { name: "Gabriel Price", status: "Active" },
        ],
        leads: [
          { name: "Lily Gray", status: "New" },
        ],
      },
      {
        id: 7,
        name: "Customer Support Portal Redesign",
        lead: { name: "Matthew Ward", status: "Active" },
        employees: [
          { name: "Scarlett Hughes", status: "Idle" },
          { name: "Andrew Sullivan", status: "Active" },
        ],
        leads: [
          { name: "Owen Cook", status: "Contacted" },
          { name: "Stella Murphy", status: "Qualified" },
        ],
      },
      {
        id: 8,
        name: "Marketing Automation System",
        lead: { name: "Chloe Barnes", status: "Active" },
        employees: [
          { name: "Ryan Bailey", status: "Active" },
          { name: "Penelope Reed", status: "Active" },
          { name: "Jonathan Kelly", status: "Active" },
          { name: "Hazel Sanders", status: "Idle" },
        ],
        leads: [
          { name: "Luke Peterson", status: "New" },
        ],
      },
      {
        id: 9,
        name: "Supply Chain Management Software",
        lead: { name: "William Brooks", status: "Active" },
        employees: [
          { name: "Eleanor Collins", status: "Active" },
        ],
        leads: [
          { name: "Aaron Bell", status: "Qualified" },
          { name: "Madison Howard", status: "Contacted" },
        ],
      },
      {
        id: 10,
        name: "Mobile Banking Application",
        lead: { name: "Grace Wood", status: "Active" },
        employees: [
          { name: "Christopher Cox", status: "Active" },
          { name: "Ella Richardson", status: "Active" },
        ],
        leads: [],
      },
      {
        id: 11,
        name: "Healthcare Management System",
        lead: { name: "David Ross", status: "Active" },
        employees: [
          { name: "Abigail Jenkins", status: "Idle" },
          { name: "Samuel Perry", status: "Active" },
          { name: "Elizabeth Foster", status: "Active" },
        ],
        leads: [
          { name: "Isaac Hayes", status: "New" },
          { name: "Claire Simmons", status: "Qualified" },
        ],
      },
      {
        id: 12,
        name: "Social Media Analytics Tool",
        lead: { name: "Lily Butler", status: "Active" },
        employees: [
          { name: "Owen Morris", status: "Active" },
        ],
        leads: [
          { name: "Gabriel Ward", status: "Contacted" },
        ],
      },
    ],
  };

  const leadTagColors = {
    New: "blue",
    Contacted: "orange",
    Qualified: "green",
  };

  return (
    <div className="project-details-container">
      <div className="total-projects-statistic">
        <Statistic
          title={<Text className="statistic-title">Total Projects</Text>}
          value={projectData.totalProjects}
          prefix={<ProjectOutlined className="statistic-icon" />}
          valueStyle={{ fontSize: "2em" }}
        />
      </div>

      {projectData.projects.map((project) => (
        <Card key={project.id} title={<Title level={3} className="project-title">{project.name}</Title>} className="project-card">
          <Row gutter={16} align="middle">
            <Col md={6} sm={24}>
              <div className="lead-card">
                <Avatar size={64} icon={<UserOutlined />} className="lead-avatar" />
                <Text strong className="lead-name">
                  {project.lead.name}
                </Text>
                <Tag className={`status-tag ${project.lead.status.toLowerCase()}`}>
                  {project.lead.status}
                </Tag>
                <Text type="secondary" className="lead-label">
                  Project Lead
                </Text>
              </div>
            </Col>
            <Col md={18} sm={24}>
              <Title level={4} className="employees-title">Employees</Title>
              {project.employees.length > 0 ? (
                project.employees.map((employee) => (
                  <Card key={employee.name} size="small" className={`employee-card ${employee.status.toLowerCase()}`}>
                    <Avatar size="small" icon={<UserOutlined />} className="employee-avatar" />
                    <Text strong className="employee-name">
                      {employee.name}
                    </Text>
                    <Tag className={`status-tag ${employee.status.toLowerCase()}`}>
                      {employee.status}
                    </Tag>
                  </Card>
                ))
              ) : (
                <Text type="secondary" className="no-data">No employees assigned to this project.</Text>
              )}
            </Col>
          </Row>

          <Divider className="project-divider" />

          <Title level={4} className="leads-title">Leads</Title>
          {project.leads.length > 0 ? (
            <Row gutter={[16, 16]}>
              {project.leads.map((lead) => (
                <Col key={lead.name} xs={24} sm={12} md={8} lg={6}>
                  <Card size="small" className="lead-item">
                    <Text strong>{lead.name}</Text>
                    <Tag className={`status-tag ${lead.status.toLowerCase()}`}>
                      {lead.status}
                    </Tag>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Text type="secondary" className="no-data">No leads associated with this project.</Text>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ProjectDetails;