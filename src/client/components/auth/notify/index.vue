<template>
  <UPopover class="inline-flex">
    <UButton size="md" icon="i-bx-bell" color="gray" class="mr-1"/>

    <template #panel>

    </template>
  </UPopover>
</template>

<script setup>
const { userStore } = useAuthStore()
</script>