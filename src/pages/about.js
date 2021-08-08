import * as React from "react";
import Frame from "../components/layout";
import { Typography, Timeline } from "antd";

const { Title } = Typography;

const AboutPage = () => {
  return (
    <Frame pageTitle="About">
      <Typography>
        <Title>About</Title>
      </Typography>
      Contact: zhangc@who.int
      <Timeline mode="alternate">
        <Timeline.Item label="08-08-2021">
          Added Two parameter types
        </Timeline.Item>
        <Timeline.Item label="09-07-2021">
          Added Parameter Link Graph
        </Timeline.Item>
        <Timeline.Item label="04-07-2021">Created Papers page</Timeline.Item>
        <Timeline.Item label="01-07-2021">Created Parameter page</Timeline.Item>
        <Timeline.Item label="30-06-2021">Created the site </Timeline.Item>
      </Timeline>
    </Frame>
  );
};

export default AboutPage;
