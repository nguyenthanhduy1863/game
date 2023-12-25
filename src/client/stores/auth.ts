import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const modal = ref(false)
  const isLogin = ref(false)

  function setModal (data : boolean) {
    modal.value = data
  }

  function setAuth (data : any) {
    if(!data){
      isLogin.value = false
    }
    else {
      isLogin.value = true
    }
  }

  async function getAuth () {
    try {
      const auth = await useAPI('auth/get')
      setAuth(auth)
      return Promise.resolve()
    }
    catch (e) {
      return Promise.reject(e)
    }
  }

  return { modal, isLogin, setModal, setAuth, getAuth }
})