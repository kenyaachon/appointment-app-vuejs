import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPlus,
  faMinus,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faMinus, faTrash, faCheck);
const app = createApp(App);

app.mount("#app");
