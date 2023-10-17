import React from "react";
import ReactEChart from "echarts-for-react";

const Chart = () => {
  const option = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      data: ["0K", "20K", "30K", "40K", "50K", "60K"],
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
        itemStyle: {
          color: "#0E9F6E",
          border: "3px solid #0E9F6E",
        },
      },
    ],
  };
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1600px",
      }}
    >
      <ReactEChart option={option} style={{ width: "100%" }} />
    </div>
  );
};

export default Chart;
