
import {createApp} from 'vue';
import firebase from 'firebase/app';
// import router from "./Routes/index";
import Router from 'vue-router';
import App from './App.vue';
import store from './store/store';



// Vue.config.productionTip = false;

const configOptions  = {
	apiKey: "AIzaSyB40yKdLO8n8TXBH8exnoaSAfpSOjsb8Ao",
	authDomain: "mycar-52e2a.firebaseapp.com",
	databaseURL: "https://mycar-52e2a-default-rtdb.firebaseio.com",
	projectId: "mycar-52e2a",
	storageBucket: "mycar-52e2a.appspot.com",
	messagingSenderId: "1006106944751",
	appId: "1:1006106944751:web:b4bb3647516217d517a71a"
};

firebase.initializeApp(configOptions);
firebase.auth().onAuthStateChanged(user => {
	store.dispatch("fetchUser", user);
});


// new Vue({
// 	store,
// 	render: h => h(App)
// }).$mount('#app') 
createApp(App).use(Router).use(store).mount('#app');
