import Rete from "rete";
import Node from "../../custom/Node.vue";
import { transitionSocket, nextSocket } from "../../sockets";
export class StartAnimationComponent extends Rete.Component {
  constructor() {
    super("Start Animation");
    this.data = {
      render: "vue",
      component: Node
    };
  }
  builder(node) {
    node.addInput(new Rete.Input("prev", "", nextSocket, false));
    let transitionsInput = new Rete.Input(
      "transition",
      "Transitions",
      transitionSocket,
      true
    );
    node.addInput(transitionsInput);
    node.addOutput(new Rete.Output("next", "Next", nextSocket, false));
    node.addOutput(new Rete.Output("complete", "Animation Complete", nextSocket, false));
    return node;
  }
  worker() {}
}
