import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

Vue.component('Machine', {
    template: '<li :class="{ active: machine.on }">{{machine.name}}<toggle-button :value="machine.on" @change="machine.on = !machine.on"/></li>',
    props: ['machine']
})

new Vue({
  el: '#app',
  render: h => h(App)
})
