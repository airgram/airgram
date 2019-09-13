import { VueConstructor } from 'vue'
import { AirgramVue, UpdateHandler, UpdateHandlers } from './types'

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
      const airgramProvider = this.$_airgramProvider

      if (this.$_airgramSubscriptions || !airgramProvider) {
        return
      }
      this.$_airgramSubscriptions = []

      // Prepare properties
      const { airgram: handlers } = this.$options
      if (handlers && !this.$isServer) {
        Object.keys(handlers).forEach((name) => {
          if (name.charAt(0) !== '$' && this.$_airgramSubscriptions) {
            const handler = handlers[name as keyof UpdateHandlers] as UpdateHandler<any>
            this.$_airgramSubscriptions.push(airgramProvider.on(name, handler))
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
