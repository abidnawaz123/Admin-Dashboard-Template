import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SettingsPage from "./pages/settings/SettingsPage";
import RootLayout from "./pages/RootLayout";
import LoginPage from "./pages/Login/Login";
import { useEffect } from "react";
import ProtectedRoute from "./pages/ProtecedRoute";
import KanbanBoard from "./components/Kanban/Kanbanboard";
import WelcomePage from "./pages/EmployeeWelcome/EmployeeWelcomePage";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "/settings",
          element: (
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/kanban",
          element: (
            <ProtectedRoute>
              <KanbanBoard />
            </ProtectedRoute>
          ),
        },
        {
          path: "theme",
          element: (
            <ProtectedRoute>
              <WelcomePage/>
            </ProtectedRoute>
          )
        },
        {
          path: "project-details",
          element: (
            <ProtectedRoute>
              <ProjectDetails/>
            </ProtectedRoute>
          )
        }
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// import React from "react";
// import { Button, Layout, Typography, Row, Col, Card, Space } from "antd";
// import { TableOutlined } from "@ant-design/icons";

// const { Header, Content } = Layout;
// const { Title, Paragraph, Text } = Typography;

// const App = () => {
//   return (
//     <Layout style={{ minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
//       {/* Top Header */}
//       <Header style={{ background: "#000", color: "white", padding: "0 20px" }}>
//         <Row justify="space-between" align="middle">
//           <Col>
//             <Title level={5} style={{ color: "white", margin: 0 }}>
//               Webinar: How to Navigate the US-Canada Trade Challenges
//             </Title>
//           </Col>
//           <Col>
//             <Button type="primary" size="small">
//               Register now
//             </Button>
//           </Col>
//         </Row>
//       </Header>

//       {/* Main Content */}
//       <Content style={{ padding: "40px 80px" }}>
//         <Row justify="space-between" align="top">
//           {/* Left Section */}
//           <Col xs={24} md={12}>
//             <Space direction="vertical" size="large">
//               <Text style={{ color: "#0077FF" }}>BREAK FREE FROM SPREADSHEETS AND EMAILS</Text>
//               <Title level={1} style={{ color: "#1c1c1c" }}>
//                 Derisk your supply chain with data.
//               </Title>
//               <Paragraph style={{ color: "#4d4d4d", fontSize: "16px" }}>
//                 When collaboration and tracking rely mainly on spreadsheets and email, procurement becomes a challenge and supply chain risks increase.
//               </Paragraph>
//               <Paragraph style={{ color: "#4d4d4d", fontSize: "16px" }}>
//                 <Text strong>Axya</Text> is a procurement software tailored for manufacturing companies that provides end-to-end operational visibility, simplifies stakeholder collaboration, and empowers procurement teams by automating tedious tasks.
//               </Paragraph>
//               <Button type="primary" size="large">
//                 Get a demo
//               </Button>
//             </Space>
//           </Col>
//           {/* Right Section */}
//           <Col xs={24} md={12} style={{ textAlign: "center" }}>
//             <Card
//               style={{ width: "100%", maxWidth: 600, borderRadius: "12px" }}
//               cover={<img alt="supply chain table" src="https://dummyimage.com/600x300/cccccc/000" />}
//             >
//               <Space direction="vertical" style={{ width: "100%" }}>
//                 <Text type="secondary">Requests & Orders Dashboard Preview</Text>
//                 <TableOutlined style={{ fontSize: 30, color: "#1890ff" }} />
//               </Space>
//             </Card>
//           </Col>
//         </Row>
//       </Content>
//     </Layout>
//   );
// };

// export default App;
