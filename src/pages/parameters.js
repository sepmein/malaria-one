import * as React from "react";
import Frame from "../components/layout";
import ParameterCard from "../components/param";
import { PageHeader, Button, Row, AutoComplete } from "antd";
import { SlidersOutlined } from "@ant-design/icons";
import { Link, navigate, graphql } from "gatsby";
import Tags from "../components/tags";
import TypeIndicator from "../components/types";

class Parameters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    };
  }
  render() {
    const { data } = this.props;
    const params = data.malariaone.allParameters.nodes;
    const renderItem = (name, id, tags, type) => ({
      value: name,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to={"/param/" + id}>{name}</Link>
          <span>
            <Tags tags={tags} />
            <TypeIndicator type={type} />
          </span>
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
        options={params.map((param) =>
          renderItem(param.name, param.id, param.tags, param.type)
        )}
        placeholder="search"
        style={{ width: "200px" }}
        /* case insensitive searching: https://ant.design/components/auto-complete/ */
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        dropdownMatchSelectWidth={500}
        autoFocus
        onChange={onAutoCompleteChange}
      />
    );
    {
      /* stackoverflow: https://stackoverflow.com/a/41436402/886198 */
    }
    const filteredParamsWithSearchString = params.filter(
      (d) =>
        this.state.searchString === "" ||
        d.name.toUpperCase().includes(this.state.searchString.toUpperCase())
    );
    return (
      <Frame>
        <PageHeader
          title="Parameters"
          subTitle="in Malaria Modellings"
          extra={[autoComplete, <Button>test</Button>]}
          avatar={{ icon: <SlidersOutlined /> }}
        ></PageHeader>
        <Row gutter={[16, 16]}>
          {filteredParamsWithSearchString.map((p) => (
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
