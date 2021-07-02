import * as React from "react";
import { Card, Title } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { card } from "./paper.module.css";

const { Meta } = Card;
class Paper extends React.Component {
  constructor(props) {
    super(props);
  }
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

export default Paper;
