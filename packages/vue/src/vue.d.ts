import Vue from 'vue'
import { AirgramDollar } from './AirgramDollar'
import { AirgramProvider } from './AirgramProvider'
import { AirgramUpdateHandlers } from './types'

type AirgramProviderOption = AirgramProvider<any> | (() => AirgramProvider<any>)

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    airgram?: AirgramUpdateHandlers<unknown>
    airgramProvider?: AirgramProviderOption
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $airgram: AirgramDollar
    airgramProvider: AirgramProviderOption
  }
}
