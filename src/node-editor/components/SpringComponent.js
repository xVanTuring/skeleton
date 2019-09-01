import Rete from "rete";
import Node from "../custom/Node.vue";
import { easeSocket } from "../sockets";
import { SpringPreviewControl } from "../controls/SpringPreviewControl";
import { NumControl } from "../controls/NumberControl";
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
    node.addControl(new NumControl(this.editor, "mass", "Mass", 0, 100, 1));
    node.addControl(
      new NumControl(this.editor, "stiffness", "Stiffness", 0, 100, 100)
    );
    node.addControl(
      new NumControl(this.editor, "damping", "Damping", 0, 100, 10)
    );
    node.addControl(
      new NumControl(this.editor, "velocity", "Velocity", 0, 100, 1)
    );
    this.springComp = new SpringPreviewControl(this.editor, "spring");
    node.addControl(this.springComp);
    node.addControl(new TableInputControl(this.editor, "dmeo"));
    return node;
  }
  worker(node) {
    let { damping, mass, stiffness, velocity } = node.data;
    this.springComp.setParams([mass, stiffness, damping, velocity]);
  }
}
