import * as React from "react";
import { Card, Col } from "antd";
import { SlidersOutlined } from "@ant-design/icons";
import { card, cardTitle } from "./paper.module.css";
import TypeIndicator from "./types";
import Tags from "./tags";
import { Link } from "gatsby";
import "./param.custom.css";

const capitalFisrtLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
class ParameterCard extends React.Component {
  render() {
    return (
      <Col span={6}>
        {" "}
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
          <h4 className={cardTitle}>{capitalFisrtLetter(this.props.name)}</h4>
        </Card>
      </Col>
    );
  }
}

export default ParameterCard;
