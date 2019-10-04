import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		time: null
	},
	getters: {
		TIME: state => {
			return state.time;
		}
	},
	mutations: {
		SET_TIME: (state, payload) => {
			state.time = payload;
		}
	},
	actions: {
		SET_TIME: (context, payload) => {
			context.commit('SET_TIME', payload);
		}
	},
	plugins: [createPersistedState()]
});