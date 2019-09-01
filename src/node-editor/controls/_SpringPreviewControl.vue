<template>
  <div class="grid spring-preview-control">
    <canvas
      id="canvas"
      ref="canvas"
      width="200"
      height="300"
    />
  </div>
</template>

<script>
import paper from "paper";
import SpringSolver from "../../utils/SpringSolver";
export default {
  data() {
    return {
      params: [1, 100, 10, 1]
    };
  },
  watch: {
    params(newVal, oldVal) {
      let diff =
        newVal[0] !== oldVal[0] ||
        newVal[1] !== oldVal[1] ||
        newVal[2] !== oldVal[2] ||
        newVal[3] !== oldVal[3];
      if (diff) this.draw();
    }
  },
  mounted: function() {
    paper.setup(this.$refs.canvas);
    this.draw();
  },
  methods: {
    draw() {
      let [mass, stiffness, damping, velocity] = this.params;
      let sp = new SpringSolver(mass, stiffness, damping, velocity);
      let points = [];
      for (let x = 0; x < 100; x += 1) {
        points.push([x * 2, 300 - sp.solve(x / 100) * 200]);
      }
      if (this.path == null) {
        this.path = new paper.Path({
          segments: points,
          strokeColor: "black",
          closed: false
        });
        this.path.strokeColor = "#18ff92";
      } else {
        this.path.segments = points;
      }
      this.path.simplify();
    }
  }
};
</script>

<style lang="scss">
.spring-preview-control {
  position: relative;
  width: 200px;
  height: 300px;
  &.grid {
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
    background-color: black;
  }
  #canvas {
    position: absolute;
    top: 0px;
    // background-color: red;
  }
}
</style>