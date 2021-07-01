import * as React from "react";
import { Card } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

const { Meta } = Card;
class Paper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card hoverable>
          <Meta avatar={<FileTextOutlined />}></Meta>
        </Card>
        <p>title: {this.props.title}</p>
        <p>published: {this.props.publishedAt}</p>
        <p>doi: {this.props.doi}</p>
      </div>
    );
  }
}

export default Paper;
