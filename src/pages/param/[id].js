import * as React from "react";
import { Link, graphql } from "gatsby";
import { Space, Typography, Row, Col, Divider, Badge } from "antd";
import {
  SlidersOutlined,
  InfoCircleOutlined,
  TagOutlined,
  ApartmentOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import TypeIndicator from "../../components/types";
import Frame from "../../components/layout";
import Paper from "../../components/paper";
import Tag from "../../components/tags";
import ParameterCard from "../../components/param";

const { Title } = Typography;

class Param extends React.Component {
  render() {
    const param = this.props.data.malariaone.parameterById;
    const relatedPaperCount =
      this.props.data.malariaone.parameterById.parametersPapersByParametersId
        .totalCount;
    const relatedPapers =
      this.props.data.malariaone.parameterById.parametersPapersByParametersId
        .nodes;
    const relatedParameters =
      this.props.data.malariaone.parameterById
        .parametersParametersByParametersId.nodes;
    const relatedParametersCount =
      this.props.data.malariaone.parameterById
        .parametersParametersByParametersId.totalCount;
    return (
      <Frame>
        {/* Parameter Name */}
        <Row>
          <Title>
            <SlidersOutlined />
            {param.name.replace(/\b(\w)/g, (s) => s.toUpperCase())}
          </Title>
        </Row>
        {/* Parameter description */}
        <Row>
          <Col flex={3}>
            <TypeIndicator type={param.type} />
          </Col>
          <Col flex={3}>
            <TagOutlined />
            <Tag tags={param.tags} />
          </Col>
        </Row>
        <Row>
          <Col>
            <InfoCircleOutlined />
            {param.definition}
          </Col>
        </Row>
        <Divider orientation="left"></Divider>
        <Row>
          <Title level={3}>
            Calculated By
            <Badge
              count={relatedParametersCount > 0 ? relatedParametersCount : 0}
            ></Badge>
            Parameters
          </Title>
        </Row>
        <Row gutter={16}>
          <Space>
            {relatedParameters.map((param) => (
              <ParameterCard
                id={param.parameterByRelatedParametersId.id}
                name={param.parameterByRelatedParametersId.name}
                type={param.parameterByRelatedParametersId.type}
                tags={param.parameterByRelatedParametersId.tags}
              />
            ))}
          </Space>
        </Row>
        <Divider orientation="left"></Divider>
        <Row>
          <Title level={3}>
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
