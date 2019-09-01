import Rete from "rete";
let numSocket = new Rete.Socket("Number");
let boolSocket = new Rete.Socket("Bool");
let kFrameSocket = new Rete.Socket("KeyFrame");
let easeSocket = new Rete.Socket("Ease");
let variableSocket = new Rete.Socket("Variable");
let nextSocket = new Rete.Socket("Next");
let propertySocket = new Rete.Socket("Property");
variableSocket.combineWith(numSocket);
let transitionSocket = new Rete.Socket("Transition");
let refSocket = new Rete.Socket("Ref");
export {
  numSocket,
  boolSocket,
  kFrameSocket,
  easeSocket,
  variableSocket,
  nextSocket,
  propertySocket,
  transitionSocket,
  refSocket
};
