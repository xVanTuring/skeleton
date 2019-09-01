import Rete from "rete";
import VueNumberControl from "./_NumberControl";
export class NumControl extends Rete.Control {
  constructor(
    emitter,
    key,
    title = "Value",
    min = 0,
    max = 1000,
    defaultVal = 1
  ) {
    super(key);
    this.component = VueNumberControl;
    this.props = { emitter, ikey: key, title, min, max, defaultVal };
  }

  setValue(val) {
    this.vueContext.value = val;
  }
}
