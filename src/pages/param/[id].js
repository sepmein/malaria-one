import * as React from "react";
import * as d3 from "d3";
import Layout from "../../components/layout";
import Paper from "../../components/paper";
import { Link, graphql } from "gatsby";
class Param extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const param = this.props.data.malariaone.parameterById;
    const relatedPaperCount =
      this.props.data.malariaone.parameterById.parametersPapersByParametersId
        .totalCount;
    const relatedPapers =
      this.props.data.malariaone.parameterById.parametersPapersByParametersId
        .nodes;
    return (
      <Layout>
        <p>parameter: {param.name}</p>
        <p>definition: {param.definition}</p>
        <p>type: {param.type}</p>
        <p>Mentioned in: {relatedPaperCount} papers</p>
        <div>
          {relatedPapers.map((paper) => (
            <Paper
              title={paper.paperByPaperId.title}
              doi={paper.paperByPaperId.doi}
              publishedAt={paper.paperByPaperId.publishedAt}
            />
          ))}
        </div>
        <div>

        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query getParamById($id: malariaone_UUID!) {
    malariaone {
      parameterById(id: $id) {
        id
        name
        definition
        dateUpdated
        dateCreated
        type
        userCreated
        userUpdated
        parametersPapersByParametersId {
          totalCount
          nodes {
            paperByPaperId {
              title
              publishedAt
              id
              doi
            }
          }
        }
        parametersParametersByParametersId {
          totalCount
          nodes {
            parameterByRelatedParametersId {
              name
              id
              type
            }
          }
        }
      }
    }
  }
`;

export default Param;
