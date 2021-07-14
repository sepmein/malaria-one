import * as React from "react";
import { Tag, Tooltip } from "antd";
import {
  DashboardOutlined,
  PercentageOutlined,
  PieChartOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { purple, gold, geekblue, red } from "@ant-design/colors";

const switchParamType = (type) => {
  switch (type) {
    case "rate":
      return (
        <Tooltip placement="bottom" title="rate">
          <DashboardOutlined style={{ color: red[3] }} />
        </Tooltip>
      );
    case "possibility":
      return (
        <Tooltip placement="bottom" title="possibility">
          <PercentageOutlined style={{ color: gold[3] }} />
        </Tooltip>
      );
    case "proportion":
      return (
        <Tooltip placement="bottom" title="proportion">
          <PieChartOutlined style={{ color: purple[3] }} />
        </Tooltip>
      );
    case "duration":
      return (
        <Tooltip placement="bottom" title="duration">
          <FieldTimeOutlined style={{ color: geekblue[3] }} />
        </Tooltip>
      );
    default:
      return null;
  }
};

const switchParamTypeFull = (type) => {
  switch (type) {
    case "rate":
      return (
        <Tag icon={<DashboardOutlined />} color={red[5]}>
          rate
        </Tag>
      );
    case "possibility":
      return (
        <Tag icon={<PercentageOutlined />} color={gold[5]}>
          possibility
        </Tag>
      );
    case "proportion":
      return (
        <Tag icon={<PieChartOutlined />} color={purple[5]}>
          proportion
        </Tag>
      );
    case "duration":
      return (
        <Tag icon={<FieldTimeOutlined />} color={geekblue[5]}>
          duration
        </Tag>
      );
    default:
      return null;
  }
};

class TypeIndicator extends React.Component {
  render() {
    if (this.props.layout === "full") {
      return switchParamTypeFull(this.props.type);
    } else {
      return switchParamType(this.props.type);
    }
  }
}

export default TypeIndicator;
