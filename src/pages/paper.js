import * as React from "react";
import Frame from "../components/layout";
import { graphql } from "gatsby";
import { Table } from "antd";

class Paper extends React.Component {
  render() {
    const columns = [
      { title: "Title", dataIndex: "title", key: "title" },
      { title: "Published Date", dataIndex: "publishedAt", key: "publishedAt" },
      { title: "DOI", dataIndex: "doi", key: "doi" },
      {
        title: "Parameters",
        dataIndex: "parameters",
        key: "parameters",
      },
    ];
    const allPapers = this.props.data.malariaone.allPapers.nodes;
    const tableData = allPapers.map((paper) => {
      return {
        title: paper.title,
        publishedAt: paper.publishedAt,
        doi: paper.doi,
        parameters: paper.parametersPapersByPaperId.totalCount,
      };
    });
    return (
      <Frame>
        <Table dataSource={tableData} columns={columns} />
      </Frame>
    );
  }
}

export const query = graphql`
  query getPapers {
    malariaone {
      allPapers {
        nodes {
          doi
          title
          publishedAt
          parametersPapersByPaperId {
            totalCount
          }
        }
      }
    }
  }
`;

export default Paper;
