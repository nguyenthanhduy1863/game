<template>
  <UModal v-model="open">
    <div class="p-2">
      <!-- Tabs -->
      <UTabs v-model="tab" :items="tabs"></UTabs>
      
      <UCard>
        <!-- Tab Sign In -->
        <AuthSignIn v-if="tab == 0" />

        <!-- Tab Sign Up -->
        <AuthSignUp v-if="tab == 1" />

        <!-- Tab Sign Forgot -->
        <AuthSignForgot v-if="tab == 2" />
      </UCard>
    </div>
  </UModal>
</template>

<script setup>
const authStore = useAuthStore()

const open = ref(false)
watch(() => authStore.modal, (val) => (open.value = val))
watch(() => open.value, (val) => (!val && authStore.setModal(false)))

const tab = ref(0) 
const tabs = [
  { label: 'Đăng Nhập', key: 'in' },
  { label: 'Đăng Ký', key: 'up' },
  { label: 'Quên Mật Khẩu', key: 'fotgot' },
]
</script>