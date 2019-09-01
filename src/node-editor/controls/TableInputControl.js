import Rete from "rete";
import _TableInputControl from "./_TableInputControl.vue";
export class TableInputControl extends Rete.Control {
  constructor(emitter, key) {
    super(key);
    this.component = _TableInputControl;
    this.props = { emitter, ikey: key };
  }
}
