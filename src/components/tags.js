import * as React from "react";
import { Tooltip } from "antd";
import {
  UserOutlined,
  BugOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";

const switchTagType = (tag) => {
  switch (tag) {
    case "human":
      return (
        <Tooltip placement="bottom" title="Human">
          <UserOutlined />
        </Tooltip>
      );
    case "vector":
      return (
        <Tooltip placement="bottom" title="Vector">
          <BugOutlined />
        </Tooltip>
      );
    case "intervention":
      return (
        <Tooltip placement="bottom" title="Intervention">
          <DeploymentUnitOutlined />
        </Tooltip>
      );
    default:
      return null;
  }
};
const Tags = (props) => {
  if (props.tags) {
    return props.tags.map((tag) => {
      return <React.Fragment key={tag}>{switchTagType(tag)}</React.Fragment>;
    });
  } else {
    return null;
  }
};

export default Tags;
