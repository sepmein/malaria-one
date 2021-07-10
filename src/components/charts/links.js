import * as React from "react";
import ReactEcharts from "echarts-for-react";
import compareSortedArray from "../../../util/compareSortedArray";

const switchCategories = (category) => {
  switch (category) {
    case compareSortedArray(category, ["human"]):
      return 0;
    case compareSortedArray(category, ["vector"]):
      return 1;
    case compareSortedArray(category, ["human", "vector"]):
      return 2;
    case compareSortedArray(category, ["intervention"]):
      return 3;
    case compareSortedArray(category, ["human", "intervention"]):
      return 4;
    case compareSortedArray(category, ["vector", "intervention"]):
      return 5;
    case compareSortedArray(category, ["human", "vector", "intervention"]):
      return 6;
    default:
      return 7;
  }
};
const generateLinksAndTypeCategories = (params, links) => {
  // get unique categories
  // https://stackoverflow.com/a/14438954/886198
  const allTags = params.map((param) => param.tags.toString());
  let uniqueTagsCategories = [...new Set(allTags)];
  let generatedData = params.map((param) => {
    return {
      id: param.id,
      name: param.name,
      category: uniqueTagsCategories.indexOf(param.tags.toString()),
    };
  });
  console.log(generatedData);
  let generatedLinks = links.map((link) => {
    return {
      id: link.id,
      source: link.parameterByParametersId.id,
      target: link.parameterByRelatedParametersId.id,
    };
  });
  return { generatedData, generatedLinks, uniqueTagsCategories };
};

const generateOptions = (graphType = "force", params, links) => {
  const { generatedData, generatedLinks, uniqueTagsCategories } =
    generateLinksAndTypeCategories(params, links);
  let options = {
    title: { text: "Parameters Connections Graph" },
    //legend: [{ data: uniqueTagsCategories }],
    series: [
      {
        layout: graphType,
        type: "graph",
        name: "Malaria Modelling Parameters' Connections Graph",
        categories: uniqueTagsCategories,
        roam: true,
        edgeSymbol: ["none", "arrow"],
        edgeSymbolSize: 10,
        label: {
          show: true,
        },
        labelLayout: {
          hideOverlap: true,
        },
        emphasis: {
          scale: true,
          focus: "adjacency",
        },
        selectMode: "multiple",
        data: generatedData,
        links: generatedLinks,
        lineStyle: {
          color: "source",
        },
      },
    ],
  };
  switch (graphType) {
    case "circular":
      break;
    default:
      // default case is force layout
      // see more docs in https://echarts.apache.org/zh/option.html#series-graph.force.initLayout
      options.series[0].force = {
        repulsion: 50,
        gravity: 0.1,
        edgeLength: [10, 50],
      };
      options.series[0].draggable = true;
      break;
  }
  return options;
};

class GraphLinks extends React.Component {
  render() {
    const graphType = this.props.type;
    const params = this.props.params;
    const links = this.props.links;
    return <ReactEcharts option={generateOptions(graphType, params, links)} />;
  }
}

export default GraphLinks;
