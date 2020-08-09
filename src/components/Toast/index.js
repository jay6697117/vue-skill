import Vue from 'vue'
import ToastCompt from './Toast.vue'

let Toast = Vue.extend(ToastCompt)

let instance
const toast = function(options) {
  options = options || {}
  instance = new Toast({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}
export default toast
