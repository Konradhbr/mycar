import {firestorePlugin} from 'vuefire';
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import store from './store';
import './assets/Scss/Settings/_base.scss';
import App from './App.vue';



Vue.use(firestorePlugin)
Vue.config.productionTip = false

new Vue({
	vuetify,
	store,
	render: h => h(App)
}).$mount('#app') 
// createApp(App).use(store).mount('#app');
