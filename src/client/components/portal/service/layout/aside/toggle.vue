<template>
  <UiFlex class="xl:hidden">
    <UButton color="gray" size="md" icon="i-bx-dots-vertical-rounded" @click="open = true"/>

    <USlideover v-model="open" side="right" :ui="{ width: 'max-w-[var(--service-layout-aside-size)]' }">
      <PortalServiceLayoutAside />
    </USlideover>
  </UiFlex>
</template>

<script setup>
const open = ref(false)
</script>