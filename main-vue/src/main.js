import "whatwg-fetch"; // fetch polyfill
import "custom-event-polyfill";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import WujieVue from "wujie-vue2";
// import hostMap from "./hostMap";
// import credentialsFetch from "./fetch";
import Switch from "ant-design-vue/es/switch";
import Tooltip from "ant-design-vue/es/tooltip";
import button from "ant-design-vue/es/button/index";
import Icon from "ant-design-vue/es/icon/index";
import "ant-design-vue/es/button/style/index.css";
import "ant-design-vue/es/style/index.css";
import "ant-design-vue/es/switch/style/index.css";
import "ant-design-vue/es/tooltip/style/index.css";
import "ant-design-vue/es/icon/style/index.css";
// const { preloadApp, bus } = WujieVue;
Vue.use(WujieVue);
Vue.use(Switch).use(Tooltip).use(button).use(Icon);

Vue.config.productionTip = false;

// bus.$on("click", (msg) => window.alert(msg));

// // 在 xxx-sub 路由下子应用将激活路由同步给主应用，主应用跳转对应路由高亮菜单栏
// bus.$on("sub-route-change", (name, path) => {
//   const mainName = `${name}-sub`;
//   const mainPath = `/${name}-sub${path}`;
//   const currentName = router.currentRoute.name;
//   const currentPath = router.currentRoute.path;
//   if (mainName === currentName && mainPath !== currentPath) {
//     router.push({ path: mainPath });
//   }
// });

// if (window.localStorage.getItem("preload") !== "false") {
//   preloadApp({
//     name: "vue2",
//     url: "//localhost:7200/",
//   });
//   if (window.Proxy) {
//     preloadApp({
//       name: "vue3",
//       url: "//localhost:7300/",
//     });
//   }
// }

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
