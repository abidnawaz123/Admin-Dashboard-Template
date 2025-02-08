import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Skeleton,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "antd/es/layout/layout";
import CustomLoader from "../../components/CustomLoader/CustomLoader";

const { Title } = Typography;

const SettingsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_USER_DETAIL_REQUEST" });
  }, []);
  const handleSubmit = () => {
    const payload = {
      id: userDetail?.id,
      first_name: userDetail?.first_name,
      last_name: userDetail?.last_name,
    };
    dispatch({ type: "UPDATE_USER_DETAIL_REQUEST", payload });
  };
  const profile = useSelector((state) => state.profile.userDetail);

  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    if (profile) {
      setUserDetail(profile?.userDetail);
    }
  }, [profile]);
  if (profile?.loading) {
    return <CustomLoader />;
  }

  if (!profile) {
    return (
      <div style={{ width: "100%", padding: "10px" }}>
        <Skeleton
          active
          rows={30}
          paragraph={{
            rows: 15,
          }}
        />
      </div>
    );
  }

  return (
    <Content>
      <div
        style={{
          padding: 20,
        }}
      >
        <Card style={{ width: "100%", overflow: "auto" }}>
          <Title level={3}>Change your profile</Title>
          <Form onFinish={handleSubmit}>
            <Row gutter={[12, 12]}>
              <Col xs={24}>
                <Typography.Title level={5}>Email</Typography.Title>
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Email"
                  value={userDetail?.email}
                  disabled
                />
              </Col>
              <Col xs={24}>
                <Typography.Title level={5}>Username</Typography.Title>
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="User name"
                  value={userDetail?.username}
                  disabled
                />
              </Col>
              <Col xs={24} sm={12}>
                <Typography.Title level={5}>First name</Typography.Title>
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="First Name"
                  value={userDetail?.first_name}
                  onChange={(event) =>
                    setUserDetail((prevState) => ({
                      ...prevState,
                      first_name: event.target.value,
                    }))
                  }
                />
              </Col>
              <Col xs={24} sm={12}>
                <Typography.Title level={5}>Last Name</Typography.Title>
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Last Name"
                  value={userDetail?.last_name}
                  onChange={(event) =>
                    setUserDetail((prevState) => ({
                      ...prevState,
                      last_name: event.target.value,
                    }))
                  }
                />
              </Col>
              <Col xs={24} md={{ span: 12, offset: 12 }}>
                <Col xs={24} md={24}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      loading={profile?.update_loading}
                    >
                      Submit Changes
                    </Button>
                  </div>
                </Col>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    </Content>
  );
};

export default SettingsPage;
