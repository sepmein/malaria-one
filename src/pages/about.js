import * as React from "react";
import { Link } from "gatsby";
import Frame from "../components/layout";
import { Typography, Timeline } from "antd";

const { Title, Text, Paragraph } = Typography;

const AboutPage = () => {
  return (
    <Frame>
      <Typography>
        <Title>About</Title>
      </Typography>
      Contact: zhangc@who.int
      <Timeline mode="alternate">
        <Timeline.Item label="04-07-2021">Created Papers page</Timeline.Item>
        <Timeline.Item label="01-07-2021">Created Parameter page</Timeline.Item>
        <Timeline.Item label="30-06-2021">Created the site </Timeline.Item>
      </Timeline>
    </Frame>
  );
};

export default AboutPage;
