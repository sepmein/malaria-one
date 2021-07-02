import * as React from "react";
import {
  UserOutlined,
  BugOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";

const switchTagType = (type) => {
  switch (type) {
    case "human":
      return <UserOutlined />;
    case "vector":
      return <BugOutlined />;
    case "intervention":
      return <DeploymentUnitOutlined />;
  }
};
const Tags = ({ props }) => {
  return (
    <div>
      {props.tags.map((tag) => {
        switchTagType(tag);
      })}
    </div>
  );
};

export default Tags;
