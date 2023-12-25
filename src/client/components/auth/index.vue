<template>
  <div>
    <!-- Not Login -->
    <UButton size="md" aria-label="Login" v-if="!authStore.isLogin" @click="authStore.setModal(true)">Đăng Nhập</UButton>

    <!--Is Login -->
  </div>
</template>

<script setup>
const authStore = useAuthStore()
</script>