<template>
  <div>
    <UDivider />

    <UiFlex justify="center" wrap="wrap" class="py-2">
      <UButton
        v-for="color in primaryColors" :key="color.value"
        variant="ghost"
        square
        :color="color.value"
        @click="primary = color"
      >
        <UiIcon name="i-bxs-circle" :style="`color: ${color.hex}`" size="6"></UiIcon>
      </UButton>
    </UiFlex>

    <UDivider />

    <UiFlex justify="center" wrap="wrap" class="py-2">
      <UButton
        v-for="color in grayColors" :key="color.value"
        variant="ghost"
        square
        :color="color.value"
        @click="gray = color"
      >
        <UiIcon name="i-bxs-circle" :style="`color: ${color.hex}`" size="6"></UiIcon>
      </UButton>
    </UiFlex>
  </div>
</template>

<script setup>
import colors from '#tailwind-config/theme/colors'
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const colorMode = useColorMode()

const primaryCookie = useCookie('theme-primary', runtimeConfig.COOKIE_CONFIG)
const primaryColors = computed(() => {
  return appConfig.ui.colors.filter(color => color !== 'primary').map(color => ({ 
    value: color, 
    hex: colors[color][colorMode.value === 'dark' ? 400 : 500] 
  }))
})
const primary = computed({
  get () {
    return primaryColors.value.find(option => option.value === appConfig.ui.primary)
  },
  set (option) {
    appConfig.ui.primary = option.value
    primaryCookie.value = option.value
  }
})

const grayCookie = useCookie('theme-gray', runtimeConfig.COOKIE_CONFIG)
const grayColors = computed(() => {
  return ['slate', 'cool', 'zinc', 'neutral', 'stone'].map(color => ({ 
    value: color, 
    hex: colors[color][colorMode.value === 'dark' ? 400 : 500] 
  }))
})
const gray = computed({
  get () {
    return grayColors.value.find(option => option.value === appConfig.ui.gray)
  },
  set (option) {
    appConfig.ui.gray = option.value
    grayCookie.value = option.value
  }
})
</script>