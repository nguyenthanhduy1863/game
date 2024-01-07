<template>
  <UPopover class="inline-flex">
    <UAvatar
      chip-color="primary"
      chip-position="bottom-right"
      :src="userStore.profile.avatar || 'https://avatars.githubusercontent.com/u/739984?v=4'"
      :alt="userStore.auth.username"
      :ui="{
        rounded: 'rounded-xl',
        size: { 'sm' : 'h-9 w-9' }
      }"
    />

    <template #panel>
      <PublicUserProfile :user="userStore._id" />
    </template>
  </UPopover>
</template>

<script setup>
const { userStore } = useAuthStore()
</script>