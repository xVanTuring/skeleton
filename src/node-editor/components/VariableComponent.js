import Rete from "rete";
import { variableSocket } from "../sockets";
import Node from "../custom/Node.vue";
import { SelectionControl } from "../controls/SelectionControl";
export class VariableComponent extends Rete.Component {
  constructor() {
    super("Variable");
    this.data = {
      render: "vue",
      component: Node
    };
  }

  builder(node) {
    this.varSelection = new SelectionControl(
      this.editor,
      "variable",
      "Var",
      undefined,
      undefined,
      true
    );
    node.addControl(this.varSelection);
    node.addOutput(new Rete.Output("numOutput", "Output", variableSocket));
    return node;
  }

  worker() {
    // outputs["numOutput"] = node.data.num;
  }
}
