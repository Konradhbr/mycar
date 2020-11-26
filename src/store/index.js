import { createStore } from 'vuex';

export default createStore({
	state: {
		menuMobile: false,
	},
	mutations: {
		setMobileMenu(state, value) {
			state.menuMobile = value;
		},
	},
	actions: {
		setMobileMenu({ commit }, value) {
			commit('setMobileMenu', value);
		},
	},
	modules: {
	},
});
