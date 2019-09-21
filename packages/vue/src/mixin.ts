import { VueConstructor } from 'vue'
import { AirgramVue, UpdateHandler, UpdateHandlers } from './types'

export function installMixin (Vue: VueConstructor): void {
  Vue.mixin({
    beforeCreate (this: AirgramVue) {
      const options = this.$options
      const optionValue = options.airgramProvider
      if (optionValue) {
        this.$_airgramProvider = typeof optionValue === 'function' ? optionValue() : optionValue
      } else if (options.parent && (options.parent as AirgramVue).$_airgramProvider) {
        this.$_airgramProvider = (options.parent as AirgramVue).$_airgramProvider
      }
    },

    created (this: AirgramVue) {
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

    destroyed (this: AirgramVue) {
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
