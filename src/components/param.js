import * as React from "react";
import { Card } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { card } from "./paper.module.css";

class Param extends React.Component {
  render() {
    return (
      <div>
        <Card hoverable className={card}>
          {/* <Meta avatar={<FileTextOutlined />}></Meta> */}
          <p>
            <FileTextOutlined />
            {this.props.title}
          </p>
          <p>published: {this.props.publishedAt}</p>
          <p>
            doi:{" "}
            <a href={"https://doi.org/" + this.props.doi}> {this.props.doi}</a>
          </p>
        </Card>
      </div>
    );
  }
}

export default Param;
