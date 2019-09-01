<template>
  <div class="selection-control">
    <span class="control-title">{{ title }}&nbsp;</span>
    <select
      id="pet-select"
      v-model="selected"
    >
      <option
        v-for="opt in options"
        :key="opt"
        :value="opt"
      >
        {{ opt }}
      </option>
    </select>
  </div>
</template>

<script>
import { store } from "../VariablePool";
export default {
  props: ["emitter", "ikey", "getData", "putData"],
  data: () => {
    return {
      selected: "",
      store: store,
      title: "Variable"
    };
  },
  computed: {
    options: function() {
      return store.variablePool;
    }
  },
  watch: {
    selected() {
      this.update();
    },
    options() {
      if (this.options.indexOf(this.selected) === -1) {
        this.selected = "";
      }
    }
  },
  mounted: function() {
    this.selected = this.getData(this.ikey);
    if (this.selected == null && this.options.length !== 0) {
      this.selected = this.options[0];
      this.putData(this.ikey, this.selected);
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
  justify-content: space-between;
  select {
    width: 100px;
  }
  max-width: 160px;
}
</style>