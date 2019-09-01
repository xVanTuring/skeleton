<template>
  <div
    class="number-control"
    :class="{dragging:drag.downValue!==-1}"
  >
    <span
      class="control-title"
      @dblclick.stop
      @pointerdown.stop="titleDown"
    >{{ title }}</span>
    <input
      v-model="value"
      type="number"
      @input="inputUpdate($event)"
      @dblclick.stop
      @pointerdown.stop
      @pointermove.stop
    >
  </div>
</template>

<script>
export default {
  props: {
    emitter: Object,
    ikey: String,
    getData: Function,
    putData: Function,
    title: String,
    min: Number,
    max: Number,
    defaultVal: Number,
    asInt: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      value: 0,
      drag: { downValue: -1, initVal: 0 }
    };
  },
  mounted() {
    this.value = this.getData(this.ikey);
    if (this.value == null) {
      this.value = this.defaultVal;
      this.putData(this.ikey, this.value);
    }
    document.addEventListener("pointermove", this.pointerMove);
    document.addEventListener("pointerup", this.pointerUp);
  },
  methods: {
    checkValue(value) {
      let tmp = Math.min(Math.max(value, this.min), this.max);
      return this.asInt ? Math.round(tmp) : +tmp.toFixed(3);
    },
    inputUpdate(e) {
      let value;
      if (typeof e === "number") {
        value = e;
      } else {
        value = +e.target.value;
      }
      let val = this.checkValue(value);
      this.value = val;
      this.update();
    },
    update() {
      if (this.ikey) this.putData(this.ikey, this.value);
      this.emitter.trigger("process");
    },
    titleDown(event) {
      this.drag.downValue = event.clientX;
      this.drag.initVal = this.value;
      document.body.style.cursor = "ew-resize";
    },
    pointerMove(event) {
      if (this.drag.downValue !== -1) {
        let delta = event.clientX - this.drag.downValue;
        this.inputUpdate(this.drag.initVal + delta * 0.1);
      }
    },
    pointerUp() {
      this.drag.downValue = -1;
      document.body.style.cursor = "";
    }
  }
};
</script>
<style lang="scss">
.number-control {
  display: flex;
  user-select: none;
  justify-content: space-between;
  align-items: center;
  min-width: 160px;
  .control-title {
    cursor: ew-resize;
  }
  input {
    width: 100px;
    background-color: transparent;
    outline-style: none;
    border: 1px solid white;
    color: white;
    border-radius: 4px;
    padding-left: 6px;
    font-size: 18px;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &.dragging {
    input {
      pointer-events: none;
    }
  }
}
</style>