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
    default:
      return null;
  }
};

class TypeIndicator extends React.Component {
  render() {
    return switchParamType(this.props.type);
  }
}

export default TypeIndicator;
