import * as React from "react";
import Frame from "../components/layout";
import { Divider, Typography, Row, List } from "antd";
import { Link } from "gatsby";
import {
  GithubFilled,
  DatabaseOutlined,
  ChromeOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import "./open-source.custom.css";

const { Title, Text, Paragraph } = Typography;
const dependencies = ["aa", "bb"];
class OpenSource extends React.Component {
  render() {
    return (
      <Frame>
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
            <DatabaseOutlined />
            Database:{" "}
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
            <ApiOutlined />
            API: GraphQL. This project use{" "}
            <a href="https://github.com/graphile/postgraphile">
              PostGraphile
            </a>{" "}
            as middleware to expose <Text code>GraphqL</Text> api to the
            front-end.
          </Paragraph>
          <Paragraph className="tech">
            <ChromeOutlined />
          </Paragraph>
          <Divider orientation="left">Dependencies</Divider>
          <List
            size="large"
            header={<div>Dependencies List</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={dependencies}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Typography>
      </Frame>
    );
  }
}

export default OpenSource;
