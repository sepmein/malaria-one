import * as React from "react";
import Frame from "../../components/layout";
import Paper from "../../components/paper";
import { Link, graphql } from "gatsby";
import { Typography, Row, Col, Divider, Badge } from "antd";
import {
  SlidersOutlined,
  InfoCircleOutlined,
  TagOutlined,
  ApartmentOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
const { Title } = Typography;

class Param extends React.Component {
  constructor(props) {
    super(props);
  }
  switchParamType(param) {
    switch (param) {
      case "rate":
        return <LineChartOutlined />;
    }
  }
  render() {
    const param = this.props.data.malariaone.parameterById;
    const relatedPaperCount =
      this.props.data.malariaone.parameterById.parametersPapersByParametersId
        .totalCount;
    const relatedPapers =
      this.props.data.malariaone.parameterById.parametersPapersByParametersId
        .nodes;
    return (
      <Frame>
        <Row>
          <Title>
            <SlidersOutlined />
            {param.name.replace(/\b(\w)/g, (s) => s.toUpperCase())}
          </Title>
        </Row>
        <Row>
          <Col flex={3}>
            <InfoCircleOutlined />
            {param.definition}
          </Col>
          <Col flex={3}>
            <ApartmentOutlined />
            type: {this.switchParamType(param.type)}
          </Col>
          <Col flex={3}>
            <TagOutlined />
          </Col>
        </Row>
        <Divider orientation="left">Related Parameters</Divider>
        <Divider orientation="left"></Divider>
        <Row>
          <Title level={2}>
            Related Papers
            <Badge count={relatedPaperCount}></Badge>
          </Title>
        </Row>
        <Row gutter={16}>
          {relatedPapers.map((paper) => (
            <Paper
              title={paper.paperByPaperId.title}
              doi={paper.paperByPaperId.doi}
              publishedAt={paper.paperByPaperId.publishedAt}
            />
          ))}
        </Row>
        <div></div>
      </Frame>
    );
  }
}

export const query = graphql`
  query getParamById($id: malariaone_UUID!) {
    malariaone {
      parameterById(id: $id) {
        id
        name
        definition
        dateUpdated
        dateCreated
        type
        userCreated
        userUpdated
        tags
        parametersPapersByParametersId {
          totalCount
          nodes {
            paperByPaperId {
              title
              publishedAt
              id
              doi
            }
          }
        }
        parametersParametersByParametersId {
          totalCount
          nodes {
            parameterByRelatedParametersId {
              name
              id
              type
              tags
            }
          }
        }
      }
    }
  }
`;

export default Param;
