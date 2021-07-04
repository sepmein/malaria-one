import * as React from "react";
import * as d3 from "d3";
import Frame from "../components/layout";
import { Badge, Button, Row, Typography, Space, Divider, Col } from "antd";
import { Link, graphql } from "gatsby";
import ParameterCard from "../components/param";
import "./index.less";
const { Title, Paragraph, Text } = Typography;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    // this.dataset = [100, 200, 300, 400, 500];
  }
  componentDidMount() {
    // console.log(this.myRef);
    // let size = 500;
    // let svg = d3
    //   .select(this.myRef.current)
    //   .append("svg")
    //   .attr("width", size)
    //   .attr("height", size);
    // let rect_width = 95;
    // svg
    //   .selectAll("rect")
    //   .data(this.dataset)
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => 5 + i * (rect_width + 5))
    //   .attr("y", (d) => size - d)
    //   .attr("width", rect_width)
    //   .attr("height", (d) => d)
    //   .attr("fill", "teal");
  }
  render() {
    const { data } = this.props;
    const params = data.malariaone.allParameters.nodes;
    return (
      <Frame pageTitle="Malaria One">
        <Typography>
          <Title>Parameters in Malaria Models</Title>
          <Paragraph>Website Description</Paragraph>
        </Typography>
        <Row>
          <Space size="middle">
            <Badge count={data.malariaone.allPapers.totalCount}>
              <Button>Papers</Button>
            </Badge>
            <Badge count={data.malariaone.allParameters.totalCount}>
              <Button>Parameters</Button>
            </Badge>
          </Space>
        </Row>
        <Divider />
        <Title>Parameters</Title>
        <Row gutter={[16, 16]}>
          {params.map((p) => (
            <ParameterCard
              key={p.id}
              name={p.name}
              id={p.id}
              tags={p.tags}
              type={p.type}
            />
          ))}
        </Row>

        {/* <div ref={this.myRef}></div> */}
      </Frame>
    );
  }
}

// markup
// const IndexPage = ({ data }) => {
//   return (
//     <Layout pageTitle="Malaria One">
//       <h1>Parameters about the Malaria Models</h1>
//       <p>Parameters Count: {data.malariaone.allParameters.totalCount}</p>
//       <p>Papers Count: {data.malariaone.allPapers.totalCount}</p>
//     </Layout>
//   );
// };

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
      allPapers {
        totalCount
      }
    }
  }
`;
export default IndexPage;
