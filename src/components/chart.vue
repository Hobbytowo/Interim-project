<template lang="html">
  <div class="">
    <div class="container">
      <spc-chart
        :chart-data="pointsToTest"
        :center-value="centerValue"
        :sigma="sigma"
        :isEnoughData="this.isEnoughData"
        class="chart chart--main"
      />
      <zoom-chart
        :chart-data="pointsToTest"
        :isEnoughData="this.isEnoughData"
        class="chart chart--zoom"
      />
    </div>
  </div>
</template>

<script>
import spcChart from '@/assets/js/chart.js'
import zoomChart from '@/assets/js/zoom-chart.js'
import { countMean, countDeviation } from '@/assets/js/operationsHelpers.js'

export default {
  props: {
    pointsToCreateChart: {
      type: Array,
      required: true
    },
    pointsToTest: {
      type: Array,
      default: () => []
    },
    isEnoughData: {
      type: Boolean,
      default: false
    }
  },
  components: {
    spcChart,
    zoomChart
  },
  computed: {
    centerValue () {
      return this.pointsToCreateChart
        ? countMean(this.pointsToCreateChart)
        : 0
    },
    sigma () {
      return this.centerValue
        ? countDeviation(this.pointsToCreateChart, this.centerValue)
        : 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: #ddd;
    padding: 50px;
    margin: 20px 50px;
  }

  .chart {
    cursor: e-resize;
  }

  .chart--zoom {
    height: 70px;
    padding-left: 50px;
  }
</style>
