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
  }
};
const Tags = (props) => {
  console.log(props.tags);
  return props.tags.map((tag) => {
      return switchTagType(tag);
    });
};

export default Tags;
