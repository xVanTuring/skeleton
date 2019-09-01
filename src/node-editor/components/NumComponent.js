import Rete from "rete";
import { NumControl } from "../controls/NumberControl";

import { numSocket } from "../sockets";
import Node from "../custom/Node.vue";
// import { TableInputControl } from "../controls/TableInputControl";
export class NumComponent extends Rete.Component {
  constructor() {
    super("CONST");
    this.data = {
      render: "vue",
      component: Node
    };
  }

  builder(node) {
    var out1 = new Rete.Output("numOutput", "Output", numSocket);
    // node.addControl(new TableInputControl(this.editor, "some"));
    node.addControl(new NumControl(this.editor, "num", "Val"));
    return node.addOutput(out1);
  }

  worker(node, inputs, outputs) {
    outputs["numOutput"] = node.data.num;
  }
}
