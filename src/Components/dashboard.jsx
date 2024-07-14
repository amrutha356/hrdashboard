import React, { useEffect } from "react";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// Register necessary components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
]);

const BarChartComponent = () => {
  useEffect(() => {
    const chartInstance = echarts.init(document.getElementById("barChart"));

    const options = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // Use axis to trigger tooltip
          type: "shadow", // full bar is treated as one indicator
        },
      },
      legend: {
        data: ["Bar 1"],
      },
      xAxis: {
        data: [
          "Sept 10",
          "Sept 11",
          "Sept 12",
          "Sept 13",
          "Sept 14",
          "Sept 15",
          "Sept 16",
        ],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}k", // add 'k' after the number
        },
      },
      series: [
        {
          name: "Bar 1",
          type: "bar",
          barWidth: "30%", // Adjust bar width (smaller)
          data: [100, 80, 60, 40, 20, 10, 5],
          itemStyle: {
            color: "#6abf69", // Customize bar color
          },
        },
      ],
    };

    chartInstance.setOption(options);

    // Resize chart with window resize
    window.addEventListener("resize", () => {
      chartInstance.resize();
    });

    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div id="barChart" style={{ width: "600px", height: "300px" }} />;
};

export default BarChartComponent;
