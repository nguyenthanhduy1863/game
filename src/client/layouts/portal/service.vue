<template>
  <div class="ServiceLayout">
    <header>
      <PortalServiceLayoutHeader />
    </header>

    <nav class="shadow-md dark:shadow-xl">
      <PortalServiceLayoutNav />
    </nav>

    <main>
      <slot></slot>
    </main>

    <aside class="shadow-md dark:shadow-xl">
      <PortalServiceLayoutAside />
    </aside>
  </div>
</template>

<style lang="sass">
:root
  --service-layout-header-size: 3.5rem
  --service-layout-nav-size: 200px
  --service-layout-aside-size: 350px

.ServiceLayout
  --layout-nav-reponsize: -100%
  --layout-aside-reponsize: -100%

  position: relative
  height: 100%
  min-height: 100%
  display: grid
  grid-template-columns: 0 1fr 0
  grid-template-areas: "nav main aside"

  header
    position: fixed
    top: 0
    left: 0
    width: 100%
    z-index: 1

  nav, aside
    position: fixed
    top: 0
    height: 100%

  nav
    grid-area: nav
    left: var(--layout-nav-reponsize)
    width: var(--service-layout-nav-size)

  aside
    grid-area: aside
    right: var(--layout-aside-reponsize)
    width: var(--service-layout-aside-size)

  main
    position: relative
    grid-area: main

@media (min-width: 768px)
  .ServiceLayout
    --layout-nav-reponsize: 0
    --layout-aside-reponsize: -100%
    grid-template-columns: var(--service-layout-nav-size) 1fr 0

@media (min-width: 1280px)
  .ServiceLayout
    --layout-nav-reponsize: 0
    --layout-aside-reponsize: 0
    grid-template-columns: var(--service-layout-nav-size) 1fr var(--service-layout-aside-size)

</style>