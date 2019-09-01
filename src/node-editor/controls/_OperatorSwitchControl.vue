<template>
  <div class="operator-switch">
    <div
      class="operator-item"
      :class="{selected:selectedOP===0}"
      @click="onItemClick(0)"
    >
      &gt;
    </div>
    <div
      class="operator-item"
      :class="{selected:selectedOP===1}"
      @click="onItemClick(1)"
    >
      =
    </div>
    <div
      class="operator-item"
      :class="{selected:selectedOP===2}"
      @click="onItemClick(2)"
    >
      &lt;
    </div>
    <div
      class="operator-item"
      :class="{selected:selectedOP===3}"
      @click="onItemClick(3)"
    >
      &gt;=
    </div>
    <div
      class="operator-item"
      :class="{selected:selectedOP===4}"
      @click="onItemClick(4)"
    >
      &lt;=
    </div>
  </div>
</template>

<script>
export default {
  props: ["emitter", "ikey", "getData", "putData"],
  data: () => {
    return {
      selectedOP: 0
    };
  },
  mounted() {
    this.selectedOP = this.getData(this.ikey);
    if (this.selectedOP == null) {
      this.selectedOP = 0;
      this.putData(this.ikey, this.selectedOP);
    }
    // console.log("mounted", this.getData(this.ikey));
  },
  methods: {
    onItemClick: function(index) {
      this.selectedOP = index;
      this.update();
    },
    update() {
      if (this.ikey) this.putData(this.ikey, this.selectedOP);
      // this.putData("test", this.selectedOP);
      this.emitter.trigger("process");
    }
  }
};
</script>

<style lang="scss" >
.operator-switch {
  width:160px;
  display: flex;
  justify-content: space-between;
  .operator-item {
    width: 25px;
    height: 25px;
    background-color: #c4c4c4;
    margin-right: 4px;
    border-radius: 4px;
    line-height: 25px;
    overflow: hidden;
    text-align: center;
    user-select: none;
    &.selected {
      color: white;
      background-color: #37aff2;
    }
  }
}

/* .node.selected .operator-item.selected {
  color: #37aff2;
  background-color: white;
} */
</style>