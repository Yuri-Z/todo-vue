import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import globalComponents from "@/components/globalComponents";

import './styles/index.scss'

Vue.config.productionTip = false

for( const component in globalComponents) {
	Vue.component(component, globalComponents[component])
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
