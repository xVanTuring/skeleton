import Rete from "rete";
import { numSocket, boolSocket } from "../sockets";
import { OperatorSwitchControl } from "../controls/OperatorSwitchControl";
import { NumControl } from "../controls/NumberControl";
import Node from "../custom/Node.vue";
export class CompareComponent extends Rete.Component {
  constructor() {
    super("COMPARE");
    this.data = {
      render: "vue",
      component: Node
    };
  }
  builder(node) {
    let input1 = new Rete.Input("input1", "Input #1", numSocket);
    let input2 = new Rete.Input("input2", "Input #2", numSocket);
    let opSwitch = new OperatorSwitchControl(this.editor, "operator");
    let output = new Rete.Output("compareOutput", "Bool", boolSocket);
    input1.addControl(
      new NumControl(this.editor, "input1", "Input #1", -9999, 9999, 1)
    );
    input2.addControl(
      new NumControl(this.editor, "input2", "Input #2", -9999, 9999, 1)
    );
    node.addOutput(output);
    node.addControl(opSwitch);
    node.addInput(input1);
    node.addInput(input2);
    return node;
  }
  worker() {}
}
