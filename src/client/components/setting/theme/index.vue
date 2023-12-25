<template>
  <UPopover :popper="{ placement: 'bottom-end' }">
    <template #default>
      <UButton size="md" icon="i-bx-slider" color="gray" aria-label="Theme Setting"/>
    </template>

    <template #panel>
      <div class="px-2 pt-2 max-w-[250px]">
        <SettingThemeMode />
        <SettingThemeColor />
      </div>
    </template>
  </UPopover>
</template>