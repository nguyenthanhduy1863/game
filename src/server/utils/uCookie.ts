import type { H3Event } from 'h3'

const get = (event : H3Event, name: string) : any => {
  return getCookie(event, name)
}

const set = (event : H3Event, name : string, data: any) => {
  const runtimeConfig = useRuntimeConfig()
  setCookie(event, name, data, runtimeConfig.public.COOKIE_CONFIG)
}

const del = (event : H3Event, name: string) => {
  const runtimeConfig = useRuntimeConfig()
  deleteCookie(event, name, runtimeConfig.public.COOKIE_CONFIG)
}

export default () => {
  return {
    get, set, del
  }
}