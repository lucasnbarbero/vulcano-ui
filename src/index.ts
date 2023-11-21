import './assets/css/main.css';

import { App } from 'vue';

import VulcanoButton from './components/VulcanoButton/VulcanoButton.vue';

export { VulcanoButton };

export default {
  install: (app: App) => {
    app.component('VulcanoButton', VulcanoButton);
  },
};
