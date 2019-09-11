import { TdVue, TdVueConstructor } from './types'

export function installMixin<ContextT = {}> (Vue: TdVueConstructor<ContextT>) {
  Vue.mixin({
    beforeCreate (this: TdVue<ContextT>) {
      const options = this.$options
      const optionValue = options.tdProvider
      if (optionValue) {
        this.$_tdProvider = typeof optionValue === 'function' ? optionValue() : optionValue
      } else if (options.parent && (options.parent as TdVue<ContextT>).$_tdProvider) {
        this.$_tdProvider = (options.parent as TdVue<ContextT>).$_tdProvider
      }
    },

    created (this: TdVue<ContextT>) {
      const tdProvider = this.$_tdProvider

      if (this.$_tdSubscriptions || !tdProvider) {
        return
      }
      this.$_tdSubscriptions = []

      // Prepare properties
      const { td: handlers } = this.$options
      if (handlers && !this.$isServer) {
        Object.keys(handlers).forEach((name) => {
          if (name.charAt(0) !== '$') {
            this.$_tdSubscriptions!.push(tdProvider.on(name, handlers[name]))
          }
        })
      }
    },

    destroyed (this: TdVue<ContextT>) {
      if (this.$_td) {
        this.$_td._destroy()
        delete this.$_td
      }
      if (this.$_tdSubscriptions) {
        this.$_tdSubscriptions.forEach((unsubscribe: () => void) => unsubscribe())
        delete this.$_tdSubscriptions
      }
    }
  })
}
