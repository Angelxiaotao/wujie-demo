import comA from "./comA";

/* istanbul ignore next */
comA.install = function (Vue) {
  Vue.component(comA.name, comA);
};

export default comA;
