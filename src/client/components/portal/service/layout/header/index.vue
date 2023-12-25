<template>
  <UiFlex justify="between" class="
    sticky top-0 z-50
    bg-white/75 dark:bg-transparent
    backdrop-blur-xl
    shadow-sm dark:shadow-xl
    h-[var(--service-layout-header-size)] max-h-[var(--service-layout-header-size)]
    px-2
  ">
    <!-- Left -->
    <UiFlex class="mr-1">
      <!-- Logo -->
      <UiLogo class="mr-4 hidden md:inline"/>
      <!-- Nav Toogle -->
      <PortalServiceLayoutNavToggle class="mr-1"/>
      <!-- Search -->
      <PortalServiceLayoutHeaderSearch />
    </UiFlex>

    <!-- Right -->
    <UiFlex>
      <!--Theme-->
      <SettingTheme class="mr-1" />

      <!-- Auth -->
      <Auth />

      <PortalServiceLayoutAsideToggle class="ml-1"/>
    </UiFlex>
  </UiFlex>
</template>