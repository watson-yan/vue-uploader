import Vue from 'vue'
import home from './components/home.vue'

const app = new Vue({
	el: '#app',
	render(h) {
		return h(home)
	}
})