import Rete from "rete";
import {
  kFrameSocket,
  propertySocket,
  transitionSocket
} from "../../sockets";
import Node from "../../custom/Node.vue";
import { SelectionControl } from "../../controls/SelectionControl";
import { supportedProperty } from "./utils";
export class TransitionComponent extends Rete.Component {
  constructor() {
    super("Transition");
    this.data = {
      render: "vue",
      component: Node
    };
  }

  builder(node) {
    var out1 = new Rete.Output("transition", "Transition", transitionSocket);
    let propertyInput = new Rete.Input("property", "Property", propertySocket);
    propertyInput.addControl(
      new SelectionControl(
        this.editor,
        "property",
        "Property",
        supportedProperty,
        supportedProperty[0]
      )
    );
    let keyFramesInputs = new Rete.Input(
      "keyFrames",
      "KeyFrames",
      kFrameSocket,
      true
    );
    node.addInput(propertyInput);
    node.addInput(keyFramesInputs);
    node.addOutput(out1);
    return node;
  }

  worker() {}
}
