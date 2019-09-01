import Rete from "rete";
import _SpringPreviewControl from "./_SpringPreviewControl.vue";
export class SpringPreviewControl extends Rete.Control {
  constructor(emitter, key) {
    super(key);
    this.component = _SpringPreviewControl;
    this.props = { emitter, ikey: key };
  }
  setParams(params) {
    if (params) this.vueContext.params = params;
  }
}
