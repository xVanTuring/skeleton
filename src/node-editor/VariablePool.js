import Vue from "vue";

export const store = Vue.observable({
  variablePool: ["Var1", "Var2", "Var3"]
});

export const mutations = {
  setVariablePool(pool) {
    store.variablePool = pool;
  }
};
