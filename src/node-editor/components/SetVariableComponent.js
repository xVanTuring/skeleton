import Rete from "rete";
import { NumControl } from "../controls/NumberControl";

import { numSocket, variableSocket, nextSocket } from "../sockets";
import Node from "../custom/Node.vue";
export class SetVariableComponent extends Rete.Component {
  constructor() {
    super("SET");
    this.data = {
      render: "vue",
      component: Node
    };
  }

  builder(node) {
    var out1 = new Rete.Output("numOutput", "Next", nextSocket);
    let variableInput = new Rete.Input("variable", "Variable", variableSocket);
    let valueInput = new Rete.Input("value", "Value", numSocket);

    valueInput.addControl(
      new NumControl(this.editor, "value", "Value", -Infinity, Infinity, 0)
    );
    node.addInput(variableInput);
    node.addInput(valueInput);
    node.addOutput(out1);
    return node;
  }

  worker() {}
}
