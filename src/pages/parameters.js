import * as React from "react";
import Frame from "../components/layout";
import ParameterCard from "../components/param";
import { Row } from "antd";
import { graphql } from "gatsby";

class Parameters extends React.Component {
  render() {
    const { data } = this.props;
    const params = data.malariaone.allParameters.nodes;
    return (
      <Frame>
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
      </Frame>
    );
  }
}

export const query = graphql`
  query getAllParameters {
    malariaone {
      allParameters {
        nodes {
          name
          id
          tags
          type
        }
      }
    }
  }
`;

export default Parameters;
