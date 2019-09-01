import Rete from "rete";
import VueRenderPlugin from "rete-vue-render-plugin";
import ConnectionPlugin from "rete-connection-plugin";
import ContextMenuPlugin from "rete-context-menu-plugin";
import AreaPlugin from "rete-area-plugin";
import { NumComponent } from "./components/NumComponent";
import { CompareComponent } from "./components/CompareComponent";
import { KFrameComponent } from "./components/KFrameComponent";
import "./styles.scss";
import { EasingComponent } from "./components/EasingComponent";
import { SpringComponent } from "./components/SpringComponent";
import { VariableComponent } from "./components/VariableComponent";
export default async function(container) {
  container.classList.add("custom-node-editor");
  const background = document.createElement("div");
  background.classList = "background";
  let components = [
    new NumComponent(),
    new CompareComponent(),
    new KFrameComponent(),
    new EasingComponent(),
    new SpringComponent(),
    new VariableComponent()
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

  let n1 = await components[0].createNode();
  let n3 = await components[0].createNode();
  let n2 = await components[1].createNode();
  let n4 = await components[2].createNode();
  let n5 = await components[3].createNode();
  let n6 = await components[4].createNode();
  let n7 = await components[5].createNode();
  n1.position = [0, 260];
  n2.position = [300, 200];
  n3.position = [0, 130];
  n4.position = [0, 400];
  n5.position = [-400, 0];
  n6.position = [-400, 400];
  n7.position = [0, 600];
  editor.addNode(n1);
  editor.addNode(n2);
  editor.addNode(n3);
  editor.addNode(n4);
  editor.addNode(n5);
  editor.addNode(n6);
  editor.addNode(n7);
  // console.log(editor.nodes[0].update())

  editor.on(
    "process nodecreated noderemoved connectioncreated connectionremoved",
    async () => {
      await engine.abort();
      await engine.process(editor.toJSON());
      // console.log(editor.toJSON());
    }
  );
  editor.view.resize();
  // setInterval(() => {
  //   console.log(editor.selected);
  // }, 1000);
  AreaPlugin.zoomAt(editor);

  // editor.trigger("process");
  setTimeout(() => editor.trigger("process"), 1000);
}
