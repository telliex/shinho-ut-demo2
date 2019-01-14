import Vue from 'vue'

Vue.config.productionTip = false
window.alert = msg => {
  console.log(msg)
}
