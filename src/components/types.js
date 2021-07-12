import * as React from "react";
import {
  DashboardOutlined,
  PercentageOutlined,
  PieChartOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

const switchParamType = (type) => {
  switch (type) {
    case "rate":
      return (
        <Tooltip placement="bottom" title="rate">
          <DashboardOutlined />
        </Tooltip>
      );
    case "possibility":
      return (
        <Tooltip placement="bottom" title="possibility">
          <PercentageOutlined />
        </Tooltip>
      );
    case "proportion":
      return (
        <Tooltip placement="bottom" title="proportion">
          <PieChartOutlined />
        </Tooltip>
      );
    case "duration":
      return (
        <Tooltip placement="bottom" title="duration">
          <FieldTimeOutlined />
        </Tooltip>
      );
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
