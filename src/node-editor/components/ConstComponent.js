import Rete from "rete";
import { NumControl } from "../controls/NumberControl";

import { numSocket } from "../sockets";
import Node from "../custom/Node.vue";
export class ConstComponent extends Rete.Component {
  constructor() {
    super("CONST");
    this.data = {
      render: "vue",
      component: Node
    };
  }

  builder(node) {
    var out1 = new Rete.Output("numOutput", "Output", numSocket);
    node.addControl(
      new NumControl(this.editor, "num", "Val", -Infinity, Infinity, 0)
    );
    return node.addOutput(out1);
  }

  worker() {}
}
