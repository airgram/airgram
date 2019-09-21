import Vue from 'vue'
import { AirgramDollar } from './AirgramDollar'
import { AirgramProvider } from './AirgramProvider'
import { UpdateHandlers } from './types'

type AirgramProviderOption = AirgramProvider | (() => AirgramProvider)

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    airgram?: UpdateHandlers
    airgramProvider?: AirgramProviderOption
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $airgram: AirgramDollar
    airgramProvider: AirgramProviderOption
  }
}
