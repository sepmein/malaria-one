import * as React from "react";
import ReactEchartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import {
  // LineChart,
  //BarChart,
  // PieChart,
  // ScatterChart,
  // RadarChart,
  // MapChart,
  // TreeChart,
  // TreemapChart,
  GraphChart,
  // GaugeChart,
  // FunnelChart,
  // ParallelChart,
  // SankeyChart,
  // BoxplotChart,
  // CandlestickChart,
  // EffectScatterChart,
  // LinesChart,
  // HeatmapChart,
  // PictorialBarChart,
  // ThemeRiverChart,
  // SunburstChart,
  // CustomChart,
} from "echarts/charts";
// import components, all suffixed with Component
import {
  // GridSimpleComponent,
  //GridComponent,
  // PolarComponent,
  // RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  // ToolboxComponent,
  TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
  TitleComponent,
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  // LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  //DatasetComponent,
} from "echarts/components";
import {
  CanvasRenderer,
  // SVGRenderer,
} from "echarts/renderers";

import compareSortedArray from "../../../util/compareSortedArray";

echarts.use([TooltipComponent, TitleComponent, GraphChart, CanvasRenderer]);

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
          show: false,
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
        autoCurveness: true,
        zoom: 2,
        nodeScaleRatio: 2,
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
    return (
      <ReactEchartsCore
        echarts={echarts}
        option={generateOptions(graphType, params, links)}
        style={{ height: "600px" }}
      />
    );
  }
}

export default GraphLinks;
