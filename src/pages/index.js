import * as React from "react";
import _, { sample } from "underscore";
import Frame from "../components/layout";
import {
  Button,
  PageHeader,
  Statistic,
  Col,
  Row,
  Typography,
  Divider,
} from "antd";
import { SlidersOutlined } from "@ant-design/icons";
import { Link, graphql } from "gatsby";
import ParameterCard from "../components/param";
import { statisticRow, statisticCard } from "./index.module.css";
import GraphLinks from "../components/charts/links";
import "./index.less";
const { Title, Paragraph } = Typography;

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const params = data.malariaone.allParameters.nodes;
    const links = data.malariaone.allParametersParameters.nodes;
    const totalParams = data.malariaone.allParameters.totalCount;
    const totalPapers = data.malariaone.allPapers.totalCount;
    const totalValues = data.malariaone.allValues.totalCount;
    return (
      <Frame pageTitle="Home">
        <Typography>
          <Title>Understand Malaria Modelling</Title>
          <Paragraph>
            To eliminate malaria and reduce mortarlity, WHO release 2030 Global
            Technical Strategy. Nowadays, more mathematical modelling tools have
            been used to predict incidences, economic analysis
          </Paragraph>
          <Paragraph>
            Malaria One is a tool for policy makers and researchers to better
            understand malaria modelling, to choose a reasonalble assumptions
            and to better parametrize models.
          </Paragraph>
        </Typography>
        <Divider />
        <Row gutter={16} className={statisticRow} justify="center">
          <Col span={8}>
            <Statistic
              title="Papers"
              className={statisticCard}
              value={totalPapers}
            />
          </Col>
          <Col span={8}>
            <Statistic
              className={statisticCard}
              title="Parameters"
              value={totalParams}
            />
          </Col>
          <Col span={8}>
            <Statistic
              className={statisticCard}
              title="Values"
              value={totalValues}
            />
          </Col>
        </Row>
        <Divider />
        <GraphLinks links={links} params={params} />
        <Divider />
        <PageHeader
          title="Parameters"
          subTitle="in malaria mathematical models"
          avatar={{ icon: <SlidersOutlined /> }}
          extra={
            <Link to="/parameter/list">
              <Button>more</Button>
            </Link>
          }
        ></PageHeader>
        <Row gutter={[16, 16]}>
          {_.sample(params, 12).map((p) => (
            <ParameterCard
              key={p.id}
              name={p.name}
              id={p.id}
              tags={p.tags}
              type={p.type}
            />
          ))}
        </Row>
      </Frame>
    );
  }
}

export const query = graphql`
  query getParametersCount {
    malariaone {
      allParameters {
        totalCount
        nodes {
          name
          id
          tags
          type
        }
      }
      allParametersParameters {
        nodes {
          parameterByParametersId {
            id
            name
            tags
            type
          }
          parameterByRelatedParametersId {
            id
            name
            tags
            type
          }
        }
      }
      allPapers {
        totalCount
      }
      allValues {
        totalCount
      }
    }
  }
`;
export default IndexPage;
