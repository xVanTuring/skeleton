import Rete from "rete";
import _TableInputControl from "./_TableInputControl.vue";
export class TableInputControl extends Rete.Control {
  constructor(emitter, key, labels, configGroup = []) {
    super(key);
    this.component = _TableInputControl;
    this.props = { emitter, ikey: key, labels, configGroup };
  }
  setLabels(labels) {
    this.vueContext.labels = labels;
  }
}
