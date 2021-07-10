import * as React from "react";
import {
  UserOutlined,
  BugOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";

const switchTagType = (tag) => {
  switch (tag) {
    case "human":
      return <UserOutlined />;
    case "vector":
      return <BugOutlined />;
    case "intervention":
      return <DeploymentUnitOutlined />;
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
