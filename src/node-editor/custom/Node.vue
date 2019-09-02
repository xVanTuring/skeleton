<template>
  <div
    class="node"
    :class="[selected(),node.name] | kebab"
  >
    <div class="title">
      {{ node.name }}
    </div>

    <div class="content">
      <div
        v-for="output in outputs()"
        :key="output.key"
        class="outputs"
      >
        <div class="output-title">
          {{ output.name }}
        </div>
        <Socket
          v-socket:output="output"
          type="output"
          :socket="output.socket"
          :used="output.connections.length > 0"
        />
      </div>
      <div
        v-if="node.controls.size > 0 || node.inputs.size > 0"
      >
        <div
          v-for="(control,index) in controls()"
          :key="index"
          v-control="control"
          class="control"
          :style="{ width: control.parent.width - 2 * control.margin, height: control.height }"
        />
        <div
          v-for="input in inputs()"
          :key="input.key"
          class="inputs"
        >
          <Socket
            v-socket:input="input"
            type="input"
            :socket="input.socket"
            :used="input.connections.length > 0"
          />
          <div
            v-show="!input.showControl()"
            class="input-title"
          >
            {{ input.name }}
          </div>
          <div
            v-show="input.showControl()"
            v-control="input.control"
            class="input-control"
          />
        </div>
      </div>
      <div />
    </div>
  </div>
</template>

<script>
import VueRender from "rete-vue-render-plugin";
import Socket from "./Socket.vue";
export default {
  components: { Socket },
  mixins: [VueRender.mixin],
};
</script>

<style lang="scss" scoped>
$node-color: #202020bd; //rgba(35, 35, 35, 0.7);
$color-active: darken($node-color, 5%);
$title-light: rgba(0, 255, 0, 0.5);
$title-light-transparent: rgba(0, 255, 0, 0);
$group-color: rgba(15, 80, 255, 0.2);
$group-handler-size: 40px;
$group-handler-offset: -10px;
$context-menu-round: 7px;
$socket-size: 16px;
$socket-margin: 10px;
.node {
  position: relative;
  min-width: 260px;
  background: $node-color;
  box-shadow: 1px solid black;
  // border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  height: auto;
  padding-bottom: 6px;
  box-sizing: content-box;
  box-shadow: 4px 5px 9px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  &:hover {
    background: $node-color;
  }
  &.active {
    background: $color-active;
    border: 1px solid #ffd252;
  }
  &.selected {
    .title {
      background-color: #139fdb;
    }
  }
  .title {
    user-select: none;
    border-top: 1px solid #ccc;
    color: white;
    text-align: center;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 18px;
    border-radius: 10px 10px 0 0;
    padding: 8px;
    overflow: hidden;
    background-color: rgb(61, 61, 61);
  }
  .content {
    // display: table;
    width: 100%;
    padding-right: 10px;
  }
  .inputs {
    text-align: left;
  }
  .outputs {
    text-align: right;
  }
  .input-title,
  .output-title {
    user-select: none;
    vertical-align: middle;
    color: white;
    display: inline-block;
    font-family: sans-serif;
    font-size: 14px;
    margin: $socket-margin 0;
    line-height: $socket-size;
  }
  .input-control {
    z-index: 1;
    vertical-align: middle;
    display: inline-block;
  }
  .control {
    width: 100%;
    padding: $socket-margin $socket-size/2 + $socket-margin;
    padding-right: 28px;
  }
}
</style>