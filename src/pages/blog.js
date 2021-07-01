import * as React from "react";
import { graphql } from "gatsby";
import Frame from "../components/layout";
import { links } from "min-document";

const BlogPage = ({ data }) => {
  return (
    <Frame pageTitle="My Blog Posts">
      <p>My cool posts will go in there</p>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Frame>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
export default BlogPage;
