import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

// markup
const IndexPage = ({data}) => {
  return (
    <Layout pageTitle="Malaria One">
      <p>Parameters Count: {data.malariaone.allParameters.totalCount}</p>
      <p>Papers Count: {data.malariaone.allPapers.totalCount}</p>
    </Layout>
  );
};

export const query = graphql`
  query getParametersCount {
    malariaone {
      allParameters {
        totalCount
      }
      allPapers {
        totalCount
      }
    }
  }
`;
export default IndexPage;
