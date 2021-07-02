import * as React from "react";
import { Card } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { card } from "./paper.module.css";
import { Tag } from "./tags";
import { Type } from "./types";

class Param extends React.Component {
  render() {
    return (
      <Card hoverable className={card}>
        {/* <Meta avatar={<FileTextOutlined />}></Meta> */}
        <p>
          <FileTextOutlined />
          {this.props.name}
        </p>
        <p>
          published: <Type type={this.props.type} />
        </p>
        <p>
          <Tag tags={this.props.tags} />
        </p>
      </Card>
    );
  }
}

export default Param;
