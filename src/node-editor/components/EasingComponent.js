import Rete from "rete";
import Node from "../custom/Node.vue";
import { easeSocket } from "../sockets";
import { SelectionControl } from "../controls/SelectionControl";
import { EasingPreviewControl } from "../controls/EasingPreviewControl";
import { EasingConfig, getEasingPath } from "../../utils/EasingHelp";
// TODO: add custom easing
// draggable Input Title
export class EasingComponent extends Rete.Component {
  constructor() {
    super("EASING");
    this.data = {
      render: "vue",
      component: Node
    };
    this.EaseCurve = Object.keys(EasingConfig);
    this.EaseMode = ["in", "out", "both"];
  }
  builder(node) {
    node.addControl(
      new SelectionControl(
        this.editor,
        "curve",
        "Ease Curve",
        this.EaseCurve,
        "ease"
      )
    );
    this.EaseMode = EasingConfig["ease"];
    this.modeControl = new SelectionControl(
      this.editor,
      "mode",
      "Ease Mode",
      this.EaseMode,
      this.EaseMode[0]
    );
    node.addControl(this.modeControl);
    this.previewControl = new EasingPreviewControl(
      this.editor,
      "preview",
      "Preview"
    );
    node.addControl(this.previewControl);
    let output = new Rete.Output("easeOutput", "Ease", easeSocket);
    node.addOutput(output);
    return node;
  }
  worker(node) {
    // console.log(node.data.type);
    this.modeControl.setOption(EasingConfig[node.data.curve]);
    this.previewControl.setPath(getEasingPath(node.data.curve, node.data.mode));
  }
}
