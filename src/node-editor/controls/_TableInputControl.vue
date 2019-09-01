<template>
  <div class="table-input-control">
    <div
      v-for="(group,index) in labels"
      :key="index"
      class="table-input"
    >
      <div
        v-for="item in group"
        :key="item"
      >
        <input type="number">
        <div class="input-title">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      labels: [["Mass", "Stiffness"], ["Dumping", "Velocity"]]
    };
  }
};
</script>

<style lang="scss">
.table-input-control {
  .table-input {
    min-width: 180px;
    display: flex;
    justify-content: space-between;
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
    .input-title {
      color: white;
      text-align: center;
      margin-top: 2px;
    }
  }
}
</style>