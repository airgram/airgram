import { VueConstructor } from 'vue'
import { AirgramVue } from './types'

export function installMixin<ContextT = {}> (Vue: VueConstructor): void {
  Vue.mixin({
    beforeCreate (this: AirgramVue<ContextT>) {
      const options = this.$options
      const optionValue = options.airgramProvider
      if (optionValue) {
        this.$_airgramProvider = typeof optionValue === 'function' ? optionValue() : optionValue
      } else if (options.parent && (options.parent as AirgramVue<ContextT>).$_airgramProvider) {
        this.$_airgramProvider = (options.parent as AirgramVue<ContextT>).$_airgramProvider
      }
    },

    created (this: AirgramVue<ContextT>) {
      const tdProvider = this.$_airgramProvider

      if (this.$_airgramSubscriptions || !tdProvider) {
        return
      }
      this.$_airgramSubscriptions = []

      // Prepare properties
      const { airgram: handlers } = this.$options
      if (handlers && !this.$isServer) {
        Object.keys(handlers).forEach((name) => {
          if (name.charAt(0) !== '$' && this.$_airgramSubscriptions) {
            this.$_airgramSubscriptions.push(tdProvider.on(name, handlers[name]))
          }
        })
      }
    },

    destroyed (this: AirgramVue<ContextT>) {
      if (this.$_airgramDollar) {
        this.$_airgramDollar._destroy()
        delete this.$_airgramDollar
      }
      if (this.$_airgramSubscriptions) {
        this.$_airgramSubscriptions.forEach((unsubscribe: () => void) => unsubscribe())
        delete this.$_airgramSubscriptions
      }
    }
  })
}
