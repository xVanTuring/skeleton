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
        <div class="input-title">
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
      value: []
    };
  },
  mounted() {
    this.value = this.labels.map((label, index) => {
      let defaultVal = this.getData(label) || this.configGroup[index].default;
      this.putData(label.toLowerCase(), defaultVal);
      return defaultVal;
    });
  },
  methods: {
    inputUpdate(index, event) {
      let min = this.configGroup[index].min;
      let max = this.configGroup[index].max;

      let cloned = this.value.slice();
      cloned[index] = Math.min(Math.max(+event.target.value, min), max);
      this.value = cloned;
      this.update();
    },
    update() {
      this.labels.forEach((label, index) => {
        this.putData(label.toLowerCase(), this.value[index]);
      });
      this.emitter.trigger("process");
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
  .table-input {
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
    .input-title {
      color: white;
      text-align: center;
      margin-top: 2px;
    }
  }
}
</style>