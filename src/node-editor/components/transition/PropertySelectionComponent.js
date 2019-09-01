import Rete from "rete";
import { propertySocket } from "../../sockets";
import Node from "../../custom/Node.vue";
import { SelectionControl } from "../../controls/SelectionControl";
import { supportedProperty } from "./utils";
export class PropertySelectionComponent extends Rete.Component {
  constructor() {
    super("Property Selection");
    this.data = {
      render: "vue",
      component: Node
    };
    // this.supportedProperty = ["width", "height", "x", "y"];
  }

  builder(node) {
    var out1 = new Rete.Output("property", "Property", propertySocket);

    node.addControl(
      new SelectionControl(
        this.editor,
        "property",
        "Property",
        supportedProperty,
        supportedProperty[0]
      )
    );
    node.addOutput(out1);
    return node;
  }

  worker() {}
}
