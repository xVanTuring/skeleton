<template>
  <!-- <div> -->
  <div
    v-if="socket.name!=='Next'"
    v-tooltip.bottom="{content:socket.name+'\n'+(socket.hint||''),delay:300}"
    class="socket"
    :class="[type, socket.name, used ? 'used' : ''] | kebab"
  />
  <div
    v-else
    v-tooltip.bottom="{content:socket.name+'\n'+(socket.hint||''),delay:300}"
    class="socket next"
    :class="[type, socket.name, used ? 'used' : ''] | kebab"
  >
    <svg
      width="30"
      
      viewBox="0 0 21 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5626 12.0084C15.1888 12.3748 14.6862 12.58 14.1628 12.58L2.97937 12.58C1.8748 12.58 0.979368 11.6846 0.979368 10.58L0.979368 2.82001C0.979368 1.71544 1.8748 0.820015 2.97937 0.820015L14.1628 0.820015C14.6862 0.820015 15.1888 1.02522 15.5626 1.39159L19.5218 5.27159C20.322 6.05578 20.322 7.34426 19.5218 8.12844L15.5626 12.0084Z"
      />
    </svg>
  </div>
  <!-- </div> -->
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
@import "../colors.scss";
$socket-size: 16px;
$socket-margin: 10px;
.socket {
  display: inline-block;
  cursor: pointer;
  border: 2px solid white;
  border-radius: $socket-size / 2;
  width: $socket-size;
  height: $socket-size;
  margin: $socket-margin;
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
.socket.next {
  svg {
    margin-top: 4px;
    pointer-events: none;
    path {
      stroke: white;
      stroke-width: 2px;
    }
  }
  border-radius: 0;
  width: $socket-size * 2;
  height: 30px;
  border: 0px;
  background-color: transparent;

  // background-color: red;
  &:after {
    content: none;
  }
  &.used {
    svg path {
      fill: white;
    }
  }
}

.socket.number {
  border-color: $socker-number-color;
  &.used {
    background: $socker-number-color;
  }
  &:after {
    border-color: transparent transparent transparent $socker-number-color;
  }
}
.socket.ref {
  border-color: $socker-ref-color;
  &.used {
    background: $socker-ref-color;
  }
  &:after {
    border-color: transparent transparent transparent $socker-ref-color;
  }
}
.socket.variable {
  border-color: $socker-variable-color;
  &.used {
    background: $socker-variable-color;
  }
  &:after {
    border-color: transparent transparent transparent $socker-variable-color;
  }
}
.socket.property {
  // $socker-property-color: rgb(230, 49, 73);
  border-color: $socker-property-color;
  &.used {
    background: $socker-property-color;
  }
  &:after {
    border-color: transparent transparent transparent $socker-property-color;
  }
}
.socket.keyframe {
  border-radius: 0;
  transform: rotate(45deg);
  border-color: $socker-keyframe-color;
  &.used {
    background: $socker-keyframe-color;
  }
  &:after {
    transform: rotate(-45deg);
    width: 0;
    height: 0;
    top: $socket-size/4 - 1px - 11px;
    left: $socket-size - 1px;
    border-color: transparent transparent transparent $socker-keyframe-color;
  }
}
.socket.bool {
  border-color: $socker-bool-color;
  border-radius: 0;
  &.used {
    background: $socker-bool-color;
  }
  &:after {
    border-color: transparent transparent transparent $socker-bool-color;
  }
}

.socket.ease {
  border-color: $socker-ease-color;
  // border-radius: 0;
  &.used {
    background: $socker-ease-color;
  }
  &:after {
    border-color: transparent transparent transparent $socker-ease-color;
  }
}
</style>