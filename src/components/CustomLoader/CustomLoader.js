import { Card, Spin } from "antd";

const CustomLoader = () => {
  return (
    <Card
      style={{
        width: "100%",
        height: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin size="large" />
    </Card>
  );
};
export default CustomLoader;
