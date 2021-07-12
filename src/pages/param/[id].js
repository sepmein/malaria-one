import * as React from "react";
import { graphql, navigate } from "gatsby";
import {
  Empty,
  PageHeader,
  Descriptions,
  Typography,
  Row,
  Col,
  Divider,
  Badge,
  Avatar,
} from "antd";
import {
  SlidersOutlined,
  InfoCircleOutlined,
  TagOutlined,
} from "@ant-design/icons";
import TypeIndicator from "../../components/types";
import Frame from "../../components/layout";
import Paper from "../../components/paper";
import Tag from "../../components/tags";
import ParameterCard from "../../components/param";
import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

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
    const routes = [
      { path: "/home", breadcrumbName: "home" },
      { path: "/parameters", breadcrumbName: "parameters" },
    ];
    return (
      <Frame>
        {/* Parameter Name */}
        <PageHeader
          /*https://stackoverflow.com/a/66572589/886198 naviagte function, check here*/
          onBack={() => navigate(-1)}
          title={param.name.replace(/\b(\w)/g, (s) => s.toUpperCase())}
          avatar={{ icon: <SlidersOutlined /> }}
          breadcrumb={{ routes }}
        >
          <Descriptions size="middle" column={3}>
            <Descriptions.Item label="type">
              <TypeIndicator type={param.type} />
            </Descriptions.Item>
            <Descriptions.Item label="tags">
              <Tag tags={param.tags} />
            </Descriptions.Item>
            <Descriptions.Item label="creation time">
              {dayjs(param.dateCreated).fromNow()}
            </Descriptions.Item>
            {param.dataUpdated ? (
              <Descriptions.Item label="update time">
                {dayjs(param.dateUpdated).fromNow()}
              </Descriptions.Item>
            ) : null}
          </Descriptions>
        </PageHeader>
        {/* Parameter description */}
        <Divider orientation="left"></Divider>
        <Row>
          <Title level={3}>Descriptions</Title>
        </Row>
        <Row>
          <Col>{param.definition}</Col>
        </Row>
        <Divider orientation="left"></Divider>
        <Row>
          <Title level={3}>
            Calculated By{" "}
            <Badge
              count={relatedParametersCount}
              style={{ backgroundColor: "#52c41a" }}
            ></Badge>{" "}
            Parameters
          </Title>
        </Row>
        <Row gutter={16}>
          {relatedParameters.length ? (
            relatedParameters.map((param) => (
              <ParameterCard
                id={param.parameterByRelatedParametersId.id}
                name={param.parameterByRelatedParametersId.name}
                type={param.parameterByRelatedParametersId.type}
                tags={param.parameterByRelatedParametersId.tags}
              />
            ))
          ) : (
            <Empty />
          )}
        </Row>
        <Divider orientation="left"></Divider>
        <Row>
          <Title level={3}>
            Related Papers:{" "}
            <Badge
              count={relatedPaperCount}
              style={{ backgroundColor: "#52c41a" }}
            ></Badge>
          </Title>
        </Row>
        <Row gutter={16}>
          {relatedPaperCount ? (
            relatedPapers.map((paper) => (
              <Paper
                title={paper.paperByPaperId.title}
                doi={paper.paperByPaperId.doi}
                publishedAt={paper.paperByPaperId.publishedAt}
              />
            ))
          ) : (
            <Empty />
          )}
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
