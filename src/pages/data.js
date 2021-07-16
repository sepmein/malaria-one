import * as React from "react";
import Frame from "../components/layout";
import { Typography, Divider } from "antd";
const { Title, Paragraph } = Typography;

class Data extends React.Component {
  render() {
    return (
      <Frame pageTitle="Data">
        <Typography>
          <Title>Add more data to This Project</Title>
          <Paragraph>
            MalariaOne has a full-featured backend to manage the project
            database. The backend allows user enter, export data and manipulate
            database structure.
          </Paragraph>
          <Paragraph>
            Currently, only invited users are allowed to enter the system.
          </Paragraph>
          <Paragraph>
            The system could be access at:{" "}
            <a href="http://malaria.one:8055">http://malaria.one:8055</a>
          </Paragraph>
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
