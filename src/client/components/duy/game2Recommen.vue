<template>
    <UiImg class="w-[100px] h-[150px] rounded-[15px]" :src="props.img"></UiImg>
</template>
<script setup>
    const props = defineProps(['img'])
</script>