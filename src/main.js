import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BookSourceObject from "./assets/childrensbooks.json"

Vue.config.productionTip = false

new Vue({


  data() {
    return {
      booksDB: BookSourceObject.books
    }
  },

  router,
  render: h => h(App)
}).$mount('#app')
