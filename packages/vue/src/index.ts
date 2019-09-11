// import { version } from '../package.json'
import { DollarTd } from './DollarTd'
import { installMixin } from './mixin'
import { TdProvider } from './TdProvider'
import { TdVueConstructor } from './types'

export function install<ContextT> (Vue: TdVueConstructor<ContextT>) {
  if (install.installed) {
    return
  }
  install.installed = true

  const vueVersion = (Vue.version && Number(Vue.version.split('.')[0])) || -1
  if (process.env.NODE_ENV !== 'production' && vueVersion < 2) {
    console.warn(`vue-tdweb (${install.version}) need to use Vue 2.0 or later (Vue: ${Vue.version}).`)
    return
  }

  const { optionMergeStrategies } = Vue.config
  optionMergeStrategies.td = (parentVal: any, childVal: any) => {
    return childVal === undefined
      ? parentVal
      : childVal
  }

  // Lazy creation
  Object.defineProperty(Vue.prototype, '$td', {
    get (this: TdVueConstructor<ContextT>) {
      if (!this.$_td) {
        this.$_td = new DollarTd(this)
      }
      return this.$_td
    }
  })

  installMixin(Vue)
}

install.installed = false
install.version = '' // version
TdProvider.install = install

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = (window as any).Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = (window as any).Vue
}
if (GlobalVue) {
  GlobalVue.use(TdProvider)
}

export default TdProvider
