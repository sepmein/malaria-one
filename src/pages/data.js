import * as React from "react";
import Frame from "../components/layout";
import { Typography, Divider } from "antd";
const { Title } = Typography;

class Data extends React.Component {
  render() {
    return (
      <Frame pageTitle='Data'>
        <Typography>
          <Title>Add more data to This Project</Title>
          <Title level={2} id="db">
            The Database and Data Structure
          </Title>
          <Divider></Divider>
          <Title level={2} id="interface">
            The Database Management Interface
          </Title>
          <Divider></Divider>
          <Title level={2} id="account">
            Request an Account
          </Title>
        </Typography>
      </Frame>
    );
  }
}

export default Data;
