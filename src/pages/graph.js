import * as React from "react";
import Frame from "../components/layout";
import GraphLinks from "../components/charts/links";
import { PageHeader, Radio } from "antd";
import { graphql, navigate } from "gatsby";
import { SlidersOutlined } from "@ant-design/icons";

class GraphPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: "force",
    };
  }
  render() {
    const { data } = this.props;
    const params = data.malariaone.allParameters.nodes;
    const links = data.malariaone.allParametersParameters.nodes;
    const onClickLayoutButton = (value) => {
      this.setState({ layout: value });
    };
    return (
      <Frame>
        <PageHeader
          title="Parameter Linkage Graph"
          avatar={{ icon: <SlidersOutlined /> }}
          onBack={() => navigate(-1)}
          extra={[
            <Radio.Group buttonStyle="solid" defaultValue="force">
              <Radio.Button
                value="circular"
                onClick={() => onClickLayoutButton("circular")}
              >
                Circular
              </Radio.Button>
              <Radio.Button
                value="force"
                onClick={() => onClickLayoutButton("force")}
              >
                Force
              </Radio.Button>
            </Radio.Group>,
          ]}
        />
        <GraphLinks
          size="medium"
          links={links}
          params={params}
          layout={this.state.layout}
        />
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
