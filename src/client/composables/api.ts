import type { IRes } from '~~/types'

export const useAPI = async (path : string, post?: any, options: any = {}) => {
  const { data, error } = await useFetch(`/${path}`, {
    method: !!post ? 'POST' : 'GET',
    body: !!post ? post : null,
    ...options
  })

  // Fetch Error
  if(error.value) {
    const statusCode = error.value.statusCode
    const message = error.value.message
    if(process.server){
      throw createError({ statusCode, message })
    }
    if(process.client){
      showError({ statusCode, statusMessage: message })
      return Promise.reject(message)
    }
  }

  // Fetch Done
  else {
    if(!data.value) return Promise.reject(false)
    const { code, message, result } = data.value as IRes

    // Notify
    if(!!message && process.client){
      const toast = useToast()
      toast.add({
        title: 'Thông báo',
        description: message,
        color: code == 200 ? 'green' : 'red',
        icon: code == 200 ? 'i-bx-check' : 'i-bx-error',
        timeout: 2000
      })
    }

    // Done
    if(code == 200) {
      return Promise.resolve(result || null)
    }
    // Server Error
    else if(code == 500){
      if(process.server){
        throw createError({ statusCode:code, message:message })
      }
      if(process.client){
        showError({ statusCode:code, statusMessage:message })
        return Promise.reject(message)
      }
    }
    // Auth False
    else if(code == 401) {
      return Promise.reject(message)
    }
    // Auth Game False
    else if(code == 403) {
      return Promise.reject(message)
    }
    else {
      return Promise.reject(message)
    }
  }
}