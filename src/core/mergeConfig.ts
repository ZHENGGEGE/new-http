import { AxiosRequestConfig } from '../types'

const starts = Object.create(null)

function defaultStrat(val1: any, val2: any): any {
  return typeof val2 !== undefined ? val2 : val1
}

function fromVal2Strat(val1: any, val2: any): any {
  if (typeof val2 !== undefined) {
    return val2
  }
}

const startsKeysFromVal2 = ['url', 'params', 'data']
startsKeysFromVal2.forEach(key => {
  starts[key] = fromVal2Strat
})

export default function mergeConfig(
  config1: AxiosRequestConfig,
  config2?: AxiosRequestConfig
): AxiosRequestConfig {
  if (!config2) {
    config2 = {}
  }

  const config = Object.create(null)

  for (let key in config2) {
    mergeField(key)
  }

  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key)
    }
  }

  function mergeField(key: string): void {
    const strat = starts[key] || defaultStrat
    config[key] = strat(config1[key], config2![key])
  }

  return config
}
