// import VueRouter from 'vue-router';
// import Router from 'vue-router';
import { createWebHistory, createRouter } from "vue-router";

// import Vue from 'vue';
import Dashboard from '../components/UserPanel/Dashboard.vue'


// Vue.use(Router)

const routes = [
	{
		path: "/dashboard",
		name: "Dashboard",
		component: Dashboard,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router
