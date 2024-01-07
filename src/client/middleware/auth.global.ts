export default defineNuxtRouteMiddleware(async () => {
  const token = useCookie('TOKEN-AUTH')
  if(!token.value) return

  const auth = await useAPI('auth/get')
  useAuthStore().setAuth(auth)
})