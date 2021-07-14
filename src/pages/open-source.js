import * as React from "react";
import Frame from "../components/layout";
import { Divider, Typography } from "antd";
import { Link } from "gatsby";
import {
  GithubFilled,
  DatabaseOutlined,
  ChromeOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import "./open-source.custom.css";

const { Title, Text, Paragraph } = Typography;
class OpenSource extends React.Component {
  render() {
    return (
      <Frame pageTitle='Open Source'>
        <Typography>
          <Title>Open Source</Title>
          <Paragraph>
            <Text code>Malaria-One</Text> is a fully{" "}
            <Link to="https://en.wikipedia.org/wiki/Open_source">
              open sourced
            </Link>{" "}
            programme.
          </Paragraph>
          <Paragraph>
            The source code of the website is available at{" "}
            <Link to="https://github.com/sepmein/malaria-one">
              <GithubFilled />
              github
            </Link>
            .
          </Paragraph>
          <Divider orientation="left">Technologies</Divider>
          <Paragraph className="tech">
            <Title level={3}>
              <DatabaseOutlined />
              Database
            </Title>
            <Text code>
              <a href="http://postgresql.org">Postgresql</a>
            </Text>
            , open source relational database. This project also use{" "}
            <Text code>
              <a href="https://directus.io/">Directus</a>
            </Text>{" "}
            as app for <Text code>Postgresql</Text> database backend.{" "}
            <Text code>Directus</Text> offers an interface for easy management
            of <Text code>Postgresql</Text> data.
          </Paragraph>
          <Paragraph className="tech">
            <Title level={3}>
              <ApiOutlined />
              API
            </Title>
            <Text code>GraphQL</Text>. This project use{" "}
            <a href="https://github.com/graphile/postgraphile">PostGraphile</a>{" "}
            as middleware to expose <Text code>GraphqL</Text> api to the
            front-end.
          </Paragraph>
          <Paragraph className="tech">
            <Title level={3}>
              <ChromeOutlined />
              Front-End Framework
            </Title>
            <Text code>
              <Link to="https://reactjs.org/">React.js</Link>
            </Text>{" "}
            +{" "}
            <Text code>
              <Link to="https://www.gatsbyjs.com/">Gatsby.js</Link>
            </Text>{" "}
            +{" "}
            <Text code>
              <Link to="https://ant.design/">Ant.Design</Link>
            </Text>
          </Paragraph>
          <Divider orientation="left">
            Report Issues & Suggest New Features
          </Divider>
          <Paragraph>
            <Link to="https://github.com/sepmein/malaria-one/issues">
              <GithubFilled /> malaria-one/issues
            </Link>
          </Paragraph>
          <Divider orientation="left">Dependencies</Divider>
          <Paragraph>
            <Link to="https://github.com/sepmein/malaria-one/network/dependencies">
              <GithubFilled />
              malaria-one/dependencies
            </Link>{" "}
          </Paragraph>
          <Divider orientation="left">Recent Code Commits</Divider>
          <Paragraph>
            <Link to="https://github.com/sepmein/malaria-one/graphs/commit-activity">
              <GithubFilled /> malaria-one/commit-activity
            </Link>
          </Paragraph>
          <Divider orientation="left">Contributors</Divider>
          <Paragraph>
            <Link to="https://github.com/sepmein/malaria-one/graphs/contributors">
              <GithubFilled /> malaria-one/contributors
            </Link>
          </Paragraph>
        </Typography>
      </Frame>
    );
  }
}

export default OpenSource;
