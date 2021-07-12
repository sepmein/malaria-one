import * as React from "react";
// import * as d3 from "d3";
import Frame from "../components/layout";
import {
  Statistic,
  Col,
  Badge,
  Button,
  Row,
  Typography,
  Space,
  Divider,
} from "antd";
import { graphql } from "gatsby";
import ParameterCard from "../components/param";
import "./index.less";
import GraphLinks from "../components/charts/links";
import _, { sample } from "underscore";
import { statisticCard } from "./index.module.css";
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
      <Frame pageTitle="Malaria One">
        <Typography>
          <Title>Understand Malaria Modelling</Title>
          <Paragraph>
            Malaria is an disease. To eliminate malaria and reduce mortarlity,
            WHO release 2030 Global Technical Strategy. Nowadays, more
            mathematical modelling tools have been used to predict incidences,
            economic analysis
          </Paragraph>
          <Paragraph>
            Malaria One is a tool for policy makers and researchers to better
            understand malaria modelling, to choose a reasonalble assumptions
            and to better parametrize models.
          </Paragraph>
        </Typography>
        <Row gutter={16} justify="center">
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
        <GraphLinks links={links} params={params} />
        <Divider />
        <Title>Parameters</Title>
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
