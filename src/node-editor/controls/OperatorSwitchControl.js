import Rete from "rete";
import _OperatorSwitchControl from "./_OperatorSwitchControl";
export class OperatorSwitchControl extends Rete.Control {
  constructor(emitter, key) {
    super(key);
    this.component = _OperatorSwitchControl;
    this.props = { emitter, ikey: key };
  }

  setValue(val) {
    this.vueContext.selectedOP = val;
  }
}
