<template>
  <UiFlex>
    <!-- Not Login -->
    <UButton size="md" aria-label="Login" v-if="!isLogin" @click="setModal(true)">Đăng Nhập</UButton>
    
    <!--Is Login -->
    <AuthNotify v-if="!!isLogin" />

    <AuthProfile v-if="!!isLogin" />
  </UiFlex>
</template>

<script setup>
const { isLogin, setModal } = useAuthStore()
</script>