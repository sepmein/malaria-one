import * as React from "react";
import * as dayjs from "dayjs";
import { Card, Col } from "antd";
import { FileTextOutlined, LinkOutlined } from "@ant-design/icons";
import { cardTitle } from "./paper.module.css";

class Paper extends React.Component {
  render() {
    return (
      <Col span={8}>
        <Card
          hoverable
          actions={[
            <FileTextOutlined />,
            <a href={"https://doi.org/" + this.props.doi}>
              <LinkOutlined />
            </a>,
            <div>{dayjs(this.props.publishedAt).format("DD/MM/YY")}</div>,
          ]}
        >
          <h4 className={cardTitle}>{this.props.title}</h4>
        </Card>
      </Col>
    );
  }
}

export default Paper;
