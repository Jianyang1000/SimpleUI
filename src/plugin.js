import Toast from './toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {

            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    position:toastOptions.position,
                    autoClose: toastOptions.autoClose,
                    closeButton: toastOptions.closeButton
                }
            })
            toast.$slots.default = message
            toast.$mount()

            document.body.appendChild(toast.$el)

        }
    }
}
