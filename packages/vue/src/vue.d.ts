import Vue from 'vue'
import { DollarTd } from './DollarTd'
import { TdProvider } from './TdProvider'
import { TdHandlers } from './types'

declare module 'vue/types/options' {

  interface ComponentOptions<V extends Vue> {
    td?: TdHandlers<any>
    tdProvider?: TdProvider<any> | (() => TdProvider<any>)
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $td: DollarTd
  }
}
