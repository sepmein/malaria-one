import * as React from "react";
import * as d3 from "d3";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.dataset = [100, 200, 300, 400, 500];
  }
  componentDidMount() {
    console.log(this.myRef);
    let size = 500;
    let svg = d3
      .select(this.myRef.current)
      .append("svg")
      .attr("width", size)
      .attr("height", size);
    let rect_width = 95;
    svg
      .selectAll("rect")
      .data(this.dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => 5 + i * (rect_width + 5))
      .attr("y", (d) => size - d)
      .attr("width", rect_width)
      .attr("height", (d) => d)
      .attr("fill", "teal");
  }
  render() {
    const { data } = this.props;
    return (
      <Layout pageTitle="Malaria One">
        <h1>Parameters about the Malaria Models</h1>
        <h2>Stats</h2>
        <p>Papers Count: {data.malariaone.allPapers.totalCount}</p>
        <p>Parameters Count: {data.malariaone.allParameters.totalCount}</p>
        <h2>Parameters List</h2>
        <ul>
          {data.malariaone.allParameters.nodes.map((parameter) => (
            <li key={parameter.id}>
              <Link to={"param/" + parameter.id}>{parameter.name}</Link>
            </li>
          ))}
        </ul>

        <div ref={this.myRef}></div>
      </Layout>
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
        }
      }
      allPapers {
        totalCount
      }
    }
  }
`;
export default IndexPage;
