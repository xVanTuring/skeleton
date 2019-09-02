import Rete from "rete";

import { nextSocket, refSocket } from "../../sockets";
import Node from "../../custom/Node.vue";
import { SelectionControl } from "../../controls/SelectionControl";
export class OnTapComponent extends Rete.Component {
  constructor() {
    super("On Tap");
    this.data = {
      render: "vue",
      component: Node
    };
  }

  builder(node) {
    var next = new Rete.Output("numOutput", "Next", nextSocket, false);
    let refInput = new Rete.Input("ref", "Ref", refSocket);
    refInput.addControl(
      new SelectionControl(this.editor, "ref", "Ref", ["Rref", "Ref2"], "Rref")
    );
    node.addInput(refInput);
    node.addOutput(next);
    return node;
  }

  worker() {}
}
