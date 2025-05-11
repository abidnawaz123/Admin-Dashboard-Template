import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row, Divider, Typography, Tag } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import ReactEChart from "echarts-for-react";
import styles from "./style.module.scss";
import { CREATED_BY } from "../../utils/constants";
import { CustomImg } from "../../utils/images";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import WelcomePage from "../EmployeeWelcome/EmployeeWelcomePage";

const Dashboard = () => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state?.profile?.userDetail);
  const userDetail = userProfile?.userDetail;
  const stateee = useSelector(state => state)
  console.log('state is ==>', stateee)
  const leads = useSelector((state) => state?.leads?.allLeads?.leads || []);
  const employees = useSelector((state) => state?.employees?.allEmployees?.employees || []);
  const projects = useSelector((state) => state?.projects?.projectDetails?.project || []);

  useEffect(() => {
    dispatch({ type: "GET_USER_DETAIL_REQUEST" });
    dispatch({ type: "GET_ASSIGNED_PROJECTS_REQUEST", payload: { is_admin: true } });
    dispatch({ type: "GET_ALL_LEADS_REQUEST" });
  }, [dispatch]);

  if (userProfile?.loading || userDetail?.loading) {
    return <CustomLoader />;
  }

  // === CHART CONFIG: Project count by lead ===
  const leadNames = leads?.map((lead) => lead.name);
  const projectCountByLead = leads?.map((lead) => {
    return projects.filter((proj) => proj.lead?.name === lead.name).length;
  });

  const chartOption = {
    title: {
      text: "Projects per Lead",
      left: "center",
    },
    tooltip: {},
    xAxis: {
      type: "category",
      data: leadNames,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: projectCountByLead,
        type: "bar",
        itemStyle: { color: "#1677ff" },
      },
    ],
  };

  return (
    <Content>
      {userDetail?.role === "admin" ? (
        <>
          <div className={styles.contentSectionWrapper}>
            <Row>
              <Col span={24}>
                <Card className={styles.mainCard}>
                  <div className={styles.chartmainWrapper}>
                    <div className={styles.chartHeader}>
                      Projects analytics <img src={CustomImg.AlertIcon} alt="img" />
                    </div>
                    <ReactEChart option={chartOption} className={styles.chart} />
                  </div>
                </Card>
              </Col>
            </Row>

            <Row gutter={10} style={{ marginTop: "20px" }}>
              <Col span={12}>
                <Card title="Leads & Their Teams" style={{ marginBottom: 24 }}>
                  <Row gutter={[16, 16]}>
                    {leads?.map((lead) => (
                      <Col xs={24} sm={12} md={8} key={lead.id}>
                        <Card
                          title={lead.name}
                          bordered
                          hoverable
                          style={{ borderRadius: 8 }}
                        >
                          <p style={{ marginBottom: 8 }}><strong>Team Members:</strong></p>
                          {lead?.lead_team?.map((empId) => {
                            const emp = employees.find((e) => e.id === empId);
                            return (
                              <Tag color="blue" key={empId}>
                                {emp?.name || `ID: ${empId}`}
                              </Tag>
                            );
                          })}
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Card>


              </Col>

              <Col span={12}>
                <Card title="Projects Overview" style={{ marginBottom: 24 }}>
                  <Row gutter={[16, 16]}>
                    {projects?.map((project, index) => (
                      <Col xs={24} sm={12} md={8} key={index}>
                        <Card
                          title={project.name}
                          bordered={true}
                          hoverable
                          style={{ borderRadius: 8 }}
                        >
                          <p style={{ marginBottom: 8 }}>{project.description}</p>
                          <p><strong>Lead:</strong> {project.lead.name || "N/A"}</p>
                          <Divider />
                          <p><strong>Team:</strong></p>
                          {project?.lead?.team?.map((member, idx) => (
                            <Tag color={member.employee_status === "active" ? "green" : "volcano"} key={idx}>
                              {member.employee_name}
                            </Tag>
                          ))}
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Card>

              </Col>
            </Row>
          </div>

          <Card className={styles.footerCard}>
            <Footer className={styles.footer}>
              <Typography>{CREATED_BY}</Typography>
              <div className={styles.socialIcons}>
                <img src={CustomImg.FacebookIcon} alt="facebook" />
                <img src={CustomImg.TwitterIcon} alt="twitter" />
                <img src={CustomImg.GithubIcon} alt="github" />
                <img src={CustomImg.DribbleIcon} alt="dribble" />
              </div>
            </Footer>
          </Card>
        </>
      ) : (
        <WelcomePage
          firstName={userDetail?.first_name}
          lastName={userDetail?.last_name}
        />
      )}
    </Content>
  );
};

export default Dashboard;
