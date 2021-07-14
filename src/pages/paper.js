import * as React from "react";
import Frame from "../components/layout";
import { graphql, Link } from "gatsby";
import { PageHeader, Row, AutoComplete, Table } from "antd";
import { FilePptOutlined } from "@ant-design/icons";

class Paper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    };
  }
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
    let tableData = allPapers.map((paper) => {
      return {
        title: paper.title,
        publishedAt: paper.publishedAt,
        doi: paper.doi,
        parameters: paper.parametersPapersByPaperId.totalCount,
      };
    });

    const renderItem = (title, id) => ({
      value: title,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to={"/paper/" + id}>{title}</Link>
        </div>
      ),
    });
    const onAutoCompleteChange = (value) => {
      this.setState({
        searchString: value,
      });
    };
    const autoComplete = (
      <AutoComplete
        options={allPapers.map((paper) => renderItem(paper.title, paper.id))}
        placeholder="search"
        style={{ width: "200px" }}
        /* case insensitive searching: https://ant.design/components/auto-complete/ */
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        dropdownMatchSelectWidth={500}
        onChange={onAutoCompleteChange}
      />
    );

    /* stackoverflow: https://stackoverflow.com/a/41436402/886198 */
    const filteredPapersWithSearchString = tableData.filter(
      (d) =>
        this.state.searchString === "" ||
        d.title.toUpperCase().includes(this.state.searchString.toUpperCase())
    );

    return (
      <Frame>
        <PageHeader
          title="Papers"
          subTitle="in Malaria Modellings"
          extra={[autoComplete]}
          avatar={{ icon: <FilePptOutlined /> }}
        ></PageHeader>
        <Table dataSource={filteredPapersWithSearchString} columns={columns} />
      </Frame>
    );
  }
}

export const query = graphql`
  query getPapers {
    malariaone {
      allPapers {
        nodes {
          id
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
