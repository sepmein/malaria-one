import * as React from "react";
import Frame from "../components/layout";
import GraphLinks from "../components/charts/links";
import { PageHeader } from "antd";
import { graphql, navigate } from "gatsby";
import { SlidersOutlined } from "@ant-design/icons";

class GraphPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: "circular",
    };
  }
  render() {
    const { data } = this.props;
    const params = data.malariaone.allParameters.nodes;
    const links = data.malariaone.allParametersParameters.nodes;
    return (
      <Frame>
        <PageHeader
          title="Parameter Linkage Graph"
          avatar={{ icon: <SlidersOutlined /> }}
          onBack={() => navigate(-1)}
        />
        <GraphLinks links={links} params={params} layout={this.state.layout} />
      </Frame>
    );
  }
}

export const query = graphql`
  query getParameters {
    malariaone {
      allParameters {
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
    }
  }
`;
export default GraphPage;
