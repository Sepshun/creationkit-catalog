import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// GLOBAL COMPONENTS
Vue.component('Popover', () => import('@/components/Popover.vue'))
Vue.component('EdgeFlare', () => import('@/components/EdgeFlare.vue'))
Vue.component('Icon', () => import('@/components/Icon.vue'))

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
