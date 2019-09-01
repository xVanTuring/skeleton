import Rete from "rete";
import _SelectionControl from "./_SelectionControl.vue";
import _VariablePoolControl from "./_VariablePoolControl.vue";
export class SelectionControl extends Rete.Control {
  constructor(
    emitter,
    key,
    title = "",
    options = [],
    defaultVal = "",
    asVarPool = false
  ) {
    super(key);
    if (asVarPool) {
      this.component = _VariablePoolControl;
      this.props = { emitter, ikey: key, options };
    } else {
      this.component = _SelectionControl;
      this.props = { emitter, ikey: key, options, title, defaultVal };
    }
  }

  setSelected(val) {
    this.vueContext.selected = val;
  }
  setOption(options) {
    this.vueContext.mOptions = options;
    if (options.indexOf(this.vueContext.selected) === -1) {
      this.setSelected(options[0]);
    }
  }
}
