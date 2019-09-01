import Vue from 'vue'
import App from './App.vue'
import VueInputAutowidth from 'vue-input-autowidth'
import VTooltip from 'v-tooltip'

Vue.config.productionTip = false
Vue.use(VTooltip)
Vue.use(VueInputAutowidth)
new Vue({
  render: h => h(App),
}).$mount('#app')
