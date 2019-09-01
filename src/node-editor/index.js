import Rete from "rete";
import VueRenderPlugin from "rete-vue-render-plugin";
import ConnectionPlugin from "rete-connection-plugin";
import ContextMenuPlugin from "rete-context-menu-plugin";
import AreaPlugin from "rete-area-plugin";
import { ConstComponent } from "./components/ConstComponent";
import { CompareComponent } from "./components/CompareComponent";
import { KFrameComponent } from "./components/KFrameComponent";
import "./styles.scss";
import { EasingComponent } from "./components/EasingComponent";
import { SpringComponent } from "./components/SpringComponent";
import { VariableComponent } from "./components/VariableComponent";
import { SetVariableComponent } from "./components/SetVariableComponent";
import data from "./data.json";
import { TransitionComponent } from "./components/transition/TransitionComponent";
import { PropertySelectionComponent } from "./components/transition/PropertySelectionComponent";
import { RefComponent } from "./components/RefComponent";
export default async function(container) {
  container.classList.add("custom-node-editor");
  const background = document.createElement("div");
  background.classList = "background";
  let components = [
    new ConstComponent(),
    new CompareComponent(),
    new KFrameComponent(),
    new EasingComponent(),
    new SpringComponent(),
    new VariableComponent(),
    new SetVariableComponent(),
    new TransitionComponent(),
    new PropertySelectionComponent(),
    new RefComponent()
  ];
  let editor = new Rete.NodeEditor("skeleton@0.1.0", container);

  editor.use(ConnectionPlugin);
  editor.use(VueRenderPlugin);
  editor.use(ContextMenuPlugin);
  editor.use(AreaPlugin, { background });

  let engine = new Rete.Engine("skeleton@0.1.0");
  components.forEach(c => {
    editor.register(c);
    engine.register(c);
  });

  editor.fromJSON(data).then(() => {
    editor.on(
      "process nodecreated noderemoved connectioncreated connectionremoved",
      async () => {
        await engine.abort();
        await engine.process(editor.toJSON());
        console.log(editor.toJSON());
        window.dataStore = JSON.stringify(editor.toJSON());
      }
    );
    editor.trigger("process");
    editor.view.resize();
    AreaPlugin.zoomAt(editor);
  });
}
