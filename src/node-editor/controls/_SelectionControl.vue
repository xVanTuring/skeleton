<template>
  <div class="selection-control">
    <span class="control-title">{{ title }}&nbsp;</span>
    <select
      id="pet-select"
      v-model="selected"
    >
      <option
        v-for="opt in mOptions"
        :key="opt"
        :value="opt"
      >
        {{ opt }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: [
    "emitter",
    "ikey",
    "getData",
    "putData",
    "options",
    "title",
    "defaultVal"
  ],
  data: () => {
    return {
      selected: "",
      mOptions: []
    };
  },
  watch: {
    selected() {
      this.update();
    }
  },
  mounted: function() {
    this.selected = this.getData(this.ikey);
    this.mOptions = this.options;
    if (this.selected == null) {
      this.selected = this.defaultVal;
      this.putData(this.ikey, this.defaultVal);
    }
  },
  methods: {
    update() {
      if (this.ikey) this.putData(this.ikey, this.selected);
      this.emitter.trigger("process");
    }
  }
};
</script>

<style lang="scss" scoped>
.selection-control {
  display: flex;
  user-select: none;
  min-width: 160px;
  justify-content: space-between;
  select {
    width: 100px;
  }
}
</style>