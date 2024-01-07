import { defineStore } from 'pinia'
import type { IDBPortalUserStore } from '~~/types'

export const useAuthStore = defineStore('auth', () => {
  const modal = ref(false)
  const isLogin = ref(false)
  const userStore : Ref<IDBPortalUserStore | undefined> = ref(undefined)

  function setModal (data : boolean) {
    modal.value = data
  }

  function setAuth (data : IDBPortalUserStore | null) {
    if(!data){
      isLogin.value = false
      userStore.value = undefined
    }
    else {
      isLogin.value = true
      userStore.value = data
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

  async function delAuth () {
    try {
      await useAPI('auth/sign/out')
      setAuth(null)
      return Promise.resolve()
    }
    catch (e) {
      return Promise.reject(e)
    }
  }

  return { modal, isLogin, userStore, setModal, setAuth, getAuth, delAuth }
})