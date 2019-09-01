<template>
  <div class="number-control">
    <span class="control-title">{{ title }}</span>
    <input
      v-model="value"
      v-autowidth="{maxWidth: '960px', minWidth: '60px', comfortZone: 0}"
      type="number"
      @input="change($event)"
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
    defaultVal: Number
  },
  data: () => {
    return {
      value: 0
    };
  },
  mounted() {
    this.value = this.getData(this.ikey);
    if (this.value == null) {
      this.value = this.defaultVal;
      this.putData(this.ikey, this.value);
    }
  },
  methods: {
    change(e) {
      let val = +e.target.value;
      if (val < this.min) {
        val = this.min;
      } else if (val > this.max) {
        val = this.max;
      }
      this.value = Math.floor(val);
      this.update();
    },
    update() {
      if (this.ikey) this.putData(this.ikey, this.value);
      this.emitter.trigger("process");
    }
  }
};
</script>
<style lang="scss">
.number-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 140px;
  // .control-title {
  //   line-height: 18px;
  //   font-size: 18px;
  // }
  input {
    background-color: transparent;
    outline-style: none;
    border: 1px solid white;
    color: white;
    border-radius: 4px;
    padding-left: 6px;
    font-size: 18px;
  }
}
</style>