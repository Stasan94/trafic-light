import Vue from 'vue';
import VueRouter from 'vue-router';
import TraficLight from '../components/TraficLight';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [

	{path: '/',
	component: TraficLight },

	{ path: '/red',
	props: {
		light: 'red',
		lightTime: 10
	},
	component: 
		TraficLight
	},

	{ path: '/yellow',
	props: {
		light: 'yellow',
		lightTime: 3
	},
	component: TraficLight
	},

	{ path: '/green',
	props: {
		light: 'green',
		lightTime: 15
	},
	component: TraficLight }
	]
});
