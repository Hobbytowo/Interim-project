import { Bar } from 'vue-chartjs'
// eslint-disable-next-line
import chartjsPluginZoom from "chartjs-plugin-zoom";

export default {
  extends: Bar,
  props: {
    chartData: {
      type: Array,
      required: true
    },
    isEnoughData: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.renderZoomChart()
  },
  methods: {
    renderZoomChart () {
      this.renderChart({
        labels: new Array(this.chartData.length).fill().map((x, i) => i),
        datasets: [
          {
            type: 'scatter',
            label: 'point',
            pointBackgroundColor: 'transparent',
            backgroundColor: 'transparent',
            data: this.chartData
          }
        ],
      },
      // options
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        tooltips: { enabled: false },
        scales: {
          xAxes: [{
            ticks: {
              autoSkipPadding: 10
            },
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        annotation: {
          annotations: [{
          drawTime: "afterDatasetsDraw",
          type: "box",
          xScaleID: "x-axis-0",
          yScaleID: "y-axis-0",
          xMin: this.chartData.length - 40,
          xMax: this.chartData.length - 1,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderWidth: 0
          }]
        }
      }
      // e/o options
    )}
  },
  watch: {
    chartData () {
      this.$data._chart.destroy()
      this.renderZoomChart()
    }
  }
}
