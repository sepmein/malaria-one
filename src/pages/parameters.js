import * as React from "react";
import Frame from "../components/layout";
import ParameterCard from "../components/param";
import { PageHeader, Button, Row, AutoComplete } from "antd";
import { SlidersOutlined } from "@ant-design/icons";
import { graphql } from "gatsby";
import Tags from "../components/tags";
import TypeIndicator from "../components/types";

class Parameters extends React.Component {
  render() {
    const { data } = this.props;
    const params = data.malariaone.allParameters.nodes;
    const renderItem = (name, tags, type) => ({
      value: name,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {name}
          <span>
            <Tags tags={tags} />
            <TypeIndicator type={type} />
          </span>
        </div>
      ),
    });
    const autoComplete = (
      <AutoComplete
        options={params.map((param) =>
          renderItem(param.name, param.tags, param.type)
        )}
        placeholder="search"
        style={{ width: "200px" }}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        dropdownMatchSelectWidth={500}
      />
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
