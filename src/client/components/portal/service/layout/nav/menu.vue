<template>
  <UiFlex type="col" class="space-y-4">
    <div v-for="(menu, index) in list" :key="index">
      <UiText :text="menu.name" size="sm" color="gray" class="my-2 px-1" />
      <UButton 
        v-for="(item, i) in menu.child" :key="i"
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
const list = [{
  name: 'Chính',
  child: [{
    label: 'Tin Tức',
    icon: 'i-bxs-news',
    click: () => navigateTo('/')
  },{
    label: 'Nạp Tiền',
    icon: 'i-bxs-credit-card',
    click: () => navigateTo('/')
  },{
    label: 'Sự Kiện',
    icon: 'i-mdi-event-star',
    click: () => navigateTo('/')
  }]
},{
  name: 'Nền Tảng',
  child: [{
    label: 'Game H5',
    icon: 'i-bxs-devices',
    click: () => navigateTo('/')
  },{
    label: 'Game Mobile',
    icon: 'i-bx-mobile',
    click: () => navigateTo('/')
  }]
},{
  name: 'Thể Loại',
  child: [{
    label: 'MMO',
    icon: 'i-ri-sword-fill',
    click: () => navigateTo('/')
  },{
    label: 'Thẻ Bài',
    icon: 'i-icon-park-twotone-card-two',
    click: () => navigateTo('/')
  }]
},{
  name: 'Cộng Đồng',
  child: [{
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
}]
</script>