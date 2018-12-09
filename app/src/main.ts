import Plugin from 'plugin';
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(Plugin);

const vm = new Vue({
  render: h => h(App)
}).$mount('#app');

vm.$vuetify.theme.primary = 'Test ';
