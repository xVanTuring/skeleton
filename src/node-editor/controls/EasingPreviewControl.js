import Rete from "rete";
import _EasingPreviewControl from "./_EasingPreviewControl.vue";
export class EasingPreviewControl extends Rete.Control {
  constructor(emitter, key, title) {
    super(key);
    this.component = _EasingPreviewControl;
    this.props = { emitter, ikey: key, title };
  }
  setPath(val) {
    if (val) this.vueContext.path = val;
  }
}
