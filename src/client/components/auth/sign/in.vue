<template>
  <UForm :state="state" :validate="validate" @submit="submit">
    <UFormGroup label="Tài khoản" name="username">
      <UInput icon="i-bxs-user" v-model="state.username" />
    </UFormGroup>

    <UFormGroup label="Mật khẩu" name="password">
      <UInput icon="i-bxs-lock" v-model="state.password" type="password" />
    </UFormGroup>

    <UButton block type="submit" :loading="loading">Đăng Nhập</UButton>
  </UForm>
</template>

<script setup>
const authStore = useAuthStore()

const props = defineProps(['landing'])
const emits = defineEmits(['done'])

const loading = ref(false)

const state = ref({
  username: undefined,
  password: undefined,
  landing: props.landing
})

const validate = (state) => {
  const errors = []
  if (!state.username) errors.push({ path: 'username', message: 'Vui lòng nhập đầy đủ' })
  if (!state.password) errors.push({ path: 'password', message: 'Vui lòng nhập đầy đủ' })
  return errors
}

const submit = async () => {
  try {
    if(!!loading.value) return
    loading.value = true
    
    await useAPI('auth/sign/in', JSON.parse(JSON.stringify(state.value)))
    await authStore.getAuth()

    loading.value = false
    emit('done')
  }
  catch (e) {
    loading.value = false
  }
}
</script>