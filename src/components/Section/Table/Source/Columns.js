import { Badge } from "antd";
export const columns = [
  {
    title: "TRANSACTION",
    dataIndex: "transaction",
    key: "transaction",
    align: "left",
    width:300,
  },
  {
    title: "DATE & TIME",
    dataIndex: "dateNtime",
    key: "dateNtime",
    align: "left",
  },
  {
    title: "AMOUNT",
    dataIndex: "amount",
    key: "amount",
    align: "left",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    align: "left",
    render: (item, index) => {
      if (index.key == "3") {
        return (
          <>
            <Badge
              count="Cancelled"
              style={{
                backgroundColor: "#FBD5D5",
                color: "#9B1C1C",
              }}
            />
          </>
        );
      } else if (index.key == "4" || index.key == "5") {
        return (
          <>
            <Badge
              count="In progress"
              style={{
                backgroundColor: "#E1EFFE",
                color: "#1E429F",
              }}
            />
          </>
        );
      } else {
        return (
          <Badge
            count="Completed"
            style={{
              backgroundColor: "#DEF7EC",
              color: "#03543F",
            }}
          />
        );
      }
    },
  },
];
