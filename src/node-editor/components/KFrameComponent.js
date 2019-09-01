import Rete from "rete";
import { NumControl } from "../controls/NumberControl";
import { numSocket, kFrameSocket, easeSocket } from "../sockets";
import { SelectionControl } from "../controls/SelectionControl";
import Node from "../custom/Node.vue";
export class KFrameComponent extends Rete.Component {
  constructor() {
    super("KEYFRAME");
    this.data = {
      render: "vue",
      component: Node
    };
  }

  builder(node) {
    var KFrameOut = new Rete.Output("KFrame", "KeyFrame", kFrameSocket);
    let offset = new Rete.Input("offset", "Offset", numSocket);
    let value = new Rete.Input("value", "Value", numSocket);
    let ease = new Rete.Input("ease", "Ease", easeSocket);
    offset.addControl(
      new NumControl(this.editor, "offset", "Offset", 0, 9999, 0, true)
    );
    value.addControl(
      new NumControl(this.editor, "value", "Value", -9999, 9999, 1)
    );
    ease.addControl(
      new SelectionControl(
        this.editor,
        "ease",
        "Ease",
        [
          "easeInQuad",
          "easeOutQuad",
          "easeOutCubic",
          "easeInOutQuad",
          "spring",
          "linear"
        ],
        "easeInQuad"
      )
    );
    node.addInput(ease);
    node.addInput(offset);
    node.addInput(value);
    node.addOutput(KFrameOut);
    return node;
  }

  worker() {
    // if (inputs.offset.length === 1) {
    //   node.data["offset"] = inputs.offset[0];
    // }
    // if (inputs.value.length === 1) {
    //   node.data["value"] = inputs.value[0];
    // }
  }
}
