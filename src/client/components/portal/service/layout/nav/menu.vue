<template>
  <UiFlex type="col" class="space-y-4">
    <div>
      <UiText text="Chính" size="sm" color="gray" class="my-2 px-1" />
      <UButton 
        v-for="(item, i) in menu" :key="i"
        :icon="item.icon"
        :label="item.label"
        @click="item.click"
        class="w-full"
        variant="ghost"
        color="gray"
        :ui="{
          icon: { base: 'mr-2' }
        }"
      ></UButton>
    </div>

    <div>
      <UiText text="Nền Tảng" size="sm" color="gray" class="my-2 px-1" />
      <UButton 
        v-for="(item, i) in menuPlatform" :key="i"
        :icon="item.icon"
        :label="item.label"
        @click="item.click"
        class="w-full"
        variant="ghost"
        color="gray"
        :ui="{
          icon: { base: 'mr-2' }
        }"
      ></UButton>
    </div>

    <div>
      <UiText text="Thể Loại" size="sm" color="gray" class="my-2 px-1" />
      <UButton 
        v-for="(item, i) in menuCategory" :key="i"
        :icon="item.icon"
        :label="item.label"
        @click="item.click"
        class="w-full"
        variant="ghost"
        color="gray"
        :ui="{
          icon: { base: 'mr-2' }
        }"
      ></UButton>
    </div>

    <div>
      <UiText text="Cộng Đồng" size="sm" color="gray" class="my-2 px-1" />
      <UButton 
        v-for="(item, i) in menuSocial" :key="i"
        :icon="item.icon"
        :label="item.label"
        @click="item.click"
        class="w-full"
        variant="ghost"
        color="gray"
        :ui="{
          icon: { base: 'mr-2' }
        }"
      ></UButton>
    </div>
  </UiFlex>
</template>

<script setup>
const menu = [{
  label: 'Tin Tức',
  icon: 'i-bxs-news',
  click: () => navigateTo('/')
},{
  label: 'Nạp Game',
  icon: 'i-bxs-credit-card',
  click: () => navigateTo('/')
},{
  label: 'Sự Kiện',
  icon: 'i-mdi-event-star',
  click: () => navigateTo('/')
}]

const menuPlatform = [{
  label: 'Game H5',
  icon: 'i-bxs-devices',
  click: () => navigateTo('/')
},{
  label: 'Game Mobile',
  icon: 'i-bx-mobile',
  click: () => navigateTo('/')
},{
  label: 'Game PC',
  icon: 'i-bx-desktop',
  click: () => navigateTo('/')
}]

const menuCategory = [{
  label: 'MMO',
  icon: 'i-ri-sword-fill',
  click: () => navigateTo('/')
},{
  label: 'Thẻ Bài',
  icon: 'i-icon-park-twotone-card-two',
  click: () => navigateTo('/')
}]

const menuSocial = [{
  label: 'Fanpage',
  icon: 'i-ri-facebook-fill',
  click: () => navigateTo('/')
},{
  label: 'Tiktok',
  icon: 'i-ri-tiktok-fill',
  click: () => navigateTo('/')
},{
  label: 'Zalo',
  icon: 'i-simple-icons:zalo',
  click: () => navigateTo('/')
}]
</script>