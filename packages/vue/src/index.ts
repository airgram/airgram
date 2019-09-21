import { VueConstructor } from 'vue'
// import { version } from '../package.json'
import { AirgramDollar } from './AirgramDollar'
import { AirgramProvider } from './AirgramProvider'
import { installMixin } from './mixin'
import { AirgramVue } from './types'

export * from '@airgram/web'

export function install<ContextT> (Vue: VueConstructor): void {
  if (install.installed) {
    return
  }
  install.installed = true

  const vueVersion = (Vue.version && Number(Vue.version.split('.')[0])) || -1
  if (process.env.NODE_ENV !== 'production' && vueVersion < 2) {
    console.warn(`@airgram/vue (${install.version}) need to use Vue 2.0 or later (Vue: ${Vue.version}).`)
    return
  }

  const { optionMergeStrategies } = Vue.config
  optionMergeStrategies.td = (parentVal: any, childVal: any) => {
    return childVal === undefined
      ? parentVal
      : childVal
  }

  Object.defineProperty(Vue.prototype, '$airgram', {
    get (this: AirgramVue) {
      if (!this.$_airgramDollar) {
        this.$_airgramDollar = new AirgramDollar(this)
      }
      return this.$_airgramDollar
    }
  })

  installMixin(Vue)
}

install.installed = false
install.version = '' // version
AirgramProvider.install = install

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = (window as any).Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = (window as any).Vue
}
if (GlobalVue) {
  GlobalVue.use(AirgramProvider)
}

export default AirgramProvider
