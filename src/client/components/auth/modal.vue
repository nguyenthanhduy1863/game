<template>
  <UModal v-model="open">
  
  </UModal>
</template>

<script setup>
const authStore = useAuthStore()

const open = ref(false)
watch(() => authStore.modal, (val) => (open.value = val))
watch(() => open.value, (val) => (!val && authStore.setModal(false)))
</script>