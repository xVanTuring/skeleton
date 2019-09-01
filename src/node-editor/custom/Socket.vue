<template>
  <div
    v-tooltip.bottom="{content:socket.name+'\n'+(socket.hint||''),delay:300}"
    class="socket"
    :class="[type, socket.name, used ? 'used' : ''] | kebab"
  />
</template>

<script>
import VueRender from "rete-vue-render-plugin";
export default {
  extends: VueRender.Socket,
  props: {
    used: Boolean
  }
};
</script>

<style lang="scss" scoped>
$socket-size: 16px;
$socket-margin: 10px;
.socket {
  display: inline-block;
  cursor: pointer;
  border: 2px solid white;
  border-radius: $socket-size / 2;
  width: $socket-size;
  height: $socket-size;
  margin: $socket-margin !important;
  vertical-align: middle;
  background: transparent;
  position: relative;
  z-index: 2;
  &.used {
    background: white;
  }
  &:after {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    top: $socket-size/4 - 1px;
    left: $socket-size;
    display: inline-block;
    border-style: solid;
    border-width: $socket-size / 4 0 $socket-size / 4 $socket-size / 6;
    border-color: transparent transparent transparent white;
  }
  &:hover {
    border: 2px solid #777;
  }
  &.multiple {
    border-color: yellow;
  }
}
</style>