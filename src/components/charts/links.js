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
  LegendComponent,
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

echarts.use([
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  GraphChart,
  CanvasRenderer,
]);

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
    title: { text: "Parameters Connections Graph", bottom: "10%" },
    legend: [
      {
        data: uniqueTagsCategories,
      },
    ],
    series: [
      {
        layout: graphType,
        type: "graph",
        name: "Malaria Modelling Parameters' Connections Graph",
        categories: uniqueTagsCategories.map((tag) => {
          return { name: tag };
        }),
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
        tooltip: {
          position: "right",
        },
      },
    ],
    tooltip: {
      show: true,
    },
  };
  switch (graphType) {
    case "circular":
      options.series[0].zoom = 1;
      break;
    default:
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

const getGraphSize = (size) => {
  switch (size) {
    case "large":
      return "1000px";
    case "medium":
      return "800px";
    case "small":
      return "600px";
    default:
      return "600px";
  }
};

class GraphLinks extends React.Component {
  render() {
    const graphType = this.props.layout;
    const params = this.props.params;
    const links = this.props.links;
    const size = this.props.size;
    return (
      <ReactEchartsCore
        echarts={echarts}
        option={generateOptions(graphType, params, links)}
        style={{ height: getGraphSize(size) }}
      />
    );
  }
}

export default GraphLinks;
