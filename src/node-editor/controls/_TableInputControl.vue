<template>
  <div class="table-input-control">
    <div
      v-for="(val,index) in value"
      :key="labels[index]"
      class="table-input"
    >
      <div class="input-wrapper">
        <input
          :value="val"
          type="number"
          @change="inputUpdate(index,$event)"
          @dblclick.stop
          @pointerdown.stop
          @pointermove.stop
        >
        <div
          class="input-title"
          @dblclick.stop
          @pointerdown.stop="titleDown(index,$event)"
        >
          {{ labels[index] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labels: Array,
    getData: Function,
    putData: Function,
    emitter: Object,
    configGroup: Array
  },
  data: function() {
    return {
      value: [],
      drag: { currentIdx: -1, downValue: -1, initVal: 0 }
    };
  },
  mounted() {
    this.value = this.labels.map((label, index) => {
      let defaultVal = this.getData(label) || this.configGroup[index].default;
      this.putData(label.toLowerCase(), defaultVal);
      return defaultVal;
    });
    document.addEventListener("pointermove", this.pointerMove);
    document.addEventListener("pointerup", this.pointerUp);
  },
  methods: {
    checkValue(idx, value) {
      let min = this.configGroup[idx].min;
      let max = this.configGroup[idx].max;
      return Math.min(Math.max(value, min), max);
    },
    inputUpdate(index, event) {
      let targetValue;
      if (typeof event === "number") {
        targetValue = event;
      } else {
        targetValue = +event.target.value;
      }
      let cloned = this.value.slice();
      cloned[index] = +this.checkValue(index, targetValue).toFixed(2);
      this.value = cloned;
      this.update();
    },
    update() {
      this.labels.forEach((label, index) => {
        this.putData(label.toLowerCase(), this.value[index]);
      });
      this.emitter.trigger("process");
    },
    titleDown(index, event) {
      this.drag.currentIdx = index;
      this.drag.downValue = event.clientX;
      this.drag.initVal = this.value[index];
      document.body.style.cursor = "ew-resize";
    },
    pointerMove(event) {
      if (this.drag.currentIdx !== -1) {
        let delta = event.clientX - this.drag.downValue;
        this.inputUpdate(this.drag.currentIdx, this.drag.initVal + delta * 0.1);
      }
    },
    pointerUp() {
      this.drag.currentIdx = -1;
      document.body.style.cursor = "";
    }
  }
};
</script>

<style lang="scss">
.table-input-control {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 200px;
  user-select: none;
  .table-input {
    margin-bottom: 8px;
    input {
      color: white;
      font-size: 18px;
      width: 80px;
      outline: none;
      background-color: transparent;
      border: 1px white solid;
      border-radius: 4px;
      padding-left: 8px;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    .input-title {
      color: white;
      text-align: center;
      margin-top: 2px;
      cursor: ew-resize;
    }
  }
}
</style>