import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Toast from "vue-toastification";

const appName = window.document.getElementsByTagName("title")[0]?.innerText || "REYPTR27 UI";

createInertiaApp({
  title: (title) => `${title} | ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob("./Pages/**/*.vue")),
  setup({ el, app, props, plugin }) {
    return createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(Toast, {
        hideProgressBar: true,
        closeOnClick: false,
        closeButton: false,
        icon: false,
        timeout: 5000,
        transition: "Vue-Toastification__fade",
      })
      .mixin({ methods: { route } })
      .mount(el);
  },

  progress: {
    color: "#A855F7",
  },

});

