import * as React from "react";
import * as dayjs from "dayjs";
import { Card } from "antd";
import {
  FileTextOutlined,
  LinkOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
import { card, cardTitle } from "./paper.module.css";
import TypeIndicator from "./types";
import Tags from "./tags";
import { Link } from "gatsby";
import "./param.custom.css";
class ParameterCard extends React.Component {
  render() {
    return (
      <Card
        hoverable
        className={card}
        actions={[
          <Link to={"/param/" + this.props.id}>
            <SlidersOutlined />
          </Link>,
          <div>
            <TypeIndicator type={this.props.type}></TypeIndicator>
          </div>,
          <Tags tags={this.props.tags}></Tags>,
        ]}
      >
        <h4 className={cardTitle}>{this.props.name}</h4>
      </Card>
    );
  }
}

export default ParameterCard;
