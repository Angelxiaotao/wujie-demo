import comA from "./comA/index";
const components = [comA];
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
export default {
  install,
  comA,
};
