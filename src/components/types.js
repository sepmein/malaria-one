import * as React from "react";
import {
  DashboardOutlined,
  PercentageOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const switchParamType = (type) => {
  switch (type) {
    case "rate":
      return <DashboardOutlined />;
    case "possibility":
      return <PercentageOutlined />;
    case "proportion":
      return <PieChartOutlined />;
  }
};
const Type = ({ props }) => {
  return (
    <div>
      {props.type.map((type) => {
        switchParamType(type);
      })}
    </div>
  );
};

export default Type;
