<template>
  <UiFlex type="col" class="h-full">
    <!-- Logo -->
    <UiFlex 
      justify="center" 
      class="
        w-full 
        h-[var(--service-layout-header-size)] 
        max-h-[var(--service-layout-header-size)]
        visible md:invisible
      ">
      <UiLogo class="cursor-pointer" @click="navigateTo('/')" />
      <UiText color="gray" class="ml-1.5 pt-1.5" size="sm" weight="semibold">Studio</UiText>
    </UiFlex>

    <!--Menu-->
    <div class="w-full grow p-2">
      <PortalServiceLayoutNavMenu />
    </div>

    <!--Support-->
    <div class="w-full p-2">
      <LazyPortalServiceSupport />
    </div>
  </UiFlex>
</template>

<script setup>
</script>