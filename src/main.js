import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
//import BookObject from "./assets/childrensbooks.json"

Vue.config.productionTip = false

new Vue({


  // data() {
  //   return {
  //     booksDB: BookObject.books
  //   }
  // },

  router,
  store,
  render: h => h(App)
}).$mount('#app')
