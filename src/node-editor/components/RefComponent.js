import Rete from "rete";
import { refSocket } from "../sockets";
import Node from "../custom/Node.vue";
import { SelectionControl } from "../controls/SelectionControl";
export class RefComponent extends Rete.Component {
  constructor() {
    super("Ref");
    this.data = {
      render: "vue",
      component: Node
    };
  }

  builder(node) {
    var out1 = new Rete.Output("numOutput", "Output", refSocket);
    node.addControl(
      new SelectionControl(this.editor, "ref", "Ref", ["Rref", "Ref2"], "Rref")
    );
    return node.addOutput(out1);
  }

  worker() {
    // outputs["numOutput"] = node.data.num;
  }
}
