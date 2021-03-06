import Rete from "rete";
import Node from "../custom/Node.vue";
import { easeSocket } from "../sockets";
import { SpringPreviewControl } from "../controls/SpringPreviewControl";
import { TableInputControl } from "../controls/TableInputControl";

export class SpringComponent extends Rete.Component {
  constructor() {
    super("SPRING");
    this.data = {
      render: "vue",
      component: Node
    };
  }
  builder(node) {
    let output = new Rete.Output("easeOutput", "Ease", easeSocket);
    node.addOutput(output);
    let tableInput = new TableInputControl(
      this.editor,
      "params",
      ["Mass", "Stiffness", "Damping", "Velocity"],
      [
        { min: 0, max: 100, default: 1 },
        { min: 0, max: 100, default: 100 },
        { min: 0, max: 100, default: 10 },
        { min: 0, max: 100, default: 1 }
      ]
    );

    node.addControl(tableInput);
    this.springComp = new SpringPreviewControl(this.editor, "spring");
    node.addControl(this.springComp);
    return node;
  }
  worker(node) {
    let { damping, mass, stiffness, velocity } = node.data;
    this.springComp.setParams([mass, stiffness, damping, velocity]);
  }
}
