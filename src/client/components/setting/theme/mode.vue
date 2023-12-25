<template>
  <UTabs v-model="selected" :items="tabs"/>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const colorMode = useColorMode()
const modeCookie = useCookie('theme-mode', runtimeConfig.COOKIE_CONFIG)

const tabs = [
  { label: 'Tối', key: 'dark', icon: 'i-bx-user' },
  { label: 'Sáng', key: 'light' }
]

const selected = computed({
  get () {
    const modeKey = !!modeCookie.value ? modeCookie.value : colorMode.value
    const index = tabs.findIndex(i => i.key == modeKey)
    return index === -1 ? 0 : index
  },

  set (value) {
    colorMode.preference = tabs[value].key
    modeCookie.value = tabs[value].key
  }
})
</script>
