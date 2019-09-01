<template>
  <div class="easing-preview-control">
    <div class="visualizer-wrapper grid">
      <div class="visualizer">
        <svg viewBox="0 0 100 100">
          <path
            ref="path"
            class="curve"
            stroke-width=".75"
            :d="computedPath"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    emitter: Object,
    ikey: String,
    title: String,
    pathData: {
      type: String,
      default: "0.175, 0.885, 0.320, 1.275"
    }
  },
  data: () => {
    return {
      path: "0.175, 0.885, 0.320, 1.275"
    };
  },
  computed: {
    computedPath: function() {
      let coordinates = this.getCoordinates(this.path);
      return coordinates;
    }
  },
  mounted: function() {
    this.path = this.pathData;
  },
  methods: {
    convertCoordinates: function(coords) {
      var x1 = coords[0] * 100;
      var y1 = 100 - coords[1] * 100;
      var x2 = coords[2] * 100;
      var y2 = 100 - coords[3] * 100;
      return "M0 100C" + x1 + " " + y1 + " " + x2 + " " + y2 + " 100 0";
    },
    getCoordinates: function(value) {
      return this.convertCoordinates(value.split(","));
    }
  }
};
</script>

<style lang="scss">
.easing-preview-control {
  .grid {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.2) 1px,
        rgba(0, 0, 0, 0) 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, rgba(0, 0, 0, 0) 1px),
      linear-gradient(0deg, rgba(255, 255, 255, 0.1) 1px, rgba(0, 0, 0, 0) 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, rgba(0, 0, 0, 0) 1px);
    background-position: 0px -1px;
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  }
  .visualizer-wrapper {
    position: relative;
    width: 200px;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 15px;
    background-color: black;
  }
  .visualizer {
    position: relative;
  }
  svg {
    overflow: visible;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  path {
    fill: none;
    stroke: #18ff92;
  }
}
</style>