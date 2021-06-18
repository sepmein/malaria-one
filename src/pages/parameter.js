import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";

const PaperPage = ({ data }) => {
  return (
    <Layout pageTitle="Parameters">
      <p>Malaria Model Parameters</p>
      <ul>
        {data.malariaone.papers.map((paper) => (
          <li key={paper.title}>{paper.title}</li>
        ))}
      </ul>
    </Layout>
  );
};


export default PaperPage;
