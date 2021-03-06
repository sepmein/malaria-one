import * as React from "react";
import { Tooltip, Tag } from "antd";
import {
  UserOutlined,
  BugOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import { green, orange, magenta } from "@ant-design/colors";

const switchTagType = (tag) => {
  switch (tag) {
    case "human":
      return (
        <Tooltip placement="bottom" title="Human">
          <UserOutlined style={{ color: green[3] }} />
        </Tooltip>
      );
    case "vector":
      return (
        <Tooltip placement="bottom" title="Vector">
          <BugOutlined style={{ color: orange[3] }} />
        </Tooltip>
      );
    case "intervention":
      return (
        <Tooltip placement="bottom" title="Intervention">
          <DeploymentUnitOutlined style={{ color: magenta[3] }} />
        </Tooltip>
      );
    default:
      return null;
  }
};

const switchTagTypeFull = (tag) => {
  switch (tag) {
    case "human":
      return (
        <Tag icon={<UserOutlined />} color={green[5]}>
          Human
        </Tag>
      );
    case "vector":
      return (
        <Tag icon={<BugOutlined />} color={orange[5]}>
          Vector
        </Tag>
      );
    case "intervention":
      return (
        <Tag icon={<DeploymentUnitOutlined />} color={magenta[5]}>
          Intervention
        </Tag>
      );
    default:
      return null;
  }
};

const Tags = (props) => {
  if (props.tags) {
    return props.tags.map((tag) => {
      if (props.layout === "full") {
        return (
          <React.Fragment key={tag}>{switchTagTypeFull(tag)}</React.Fragment>
        );
      } else {
        return <React.Fragment key={tag}>{switchTagType(tag)}</React.Fragment>;
      }
    });
  } else {
    return null;
  }
};

export default Tags;
