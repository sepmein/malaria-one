import * as React from "react";
import { Link } from "gatsby";
import Frame from "../components/layout";
import { Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

const AboutPage = () => {
    return (<Frame>
        <Typography>
<Title>About</Title>

        </Typography>

        Contact: zhangc@who.int</Frame>);
};

export default AboutPage;
