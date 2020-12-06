import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/Scss/Settings/_base.scss'

createApp(App).use(store).mount('#app');
