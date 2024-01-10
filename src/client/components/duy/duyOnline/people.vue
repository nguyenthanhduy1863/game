<template>
    <UiFlex class="my-[15px] mx-[10px]">
        <UiImg class="h-[35px] w-[30px] rounded-[5px]" :src="props.img"></UiImg>
        <UiFlex type="col" class="ml-[15px]" items="start">
            <UiText class="text-[14px] text-white" weight="bold" :text="props.name"></UiText>
            <UiText class="text-[11px] text-gray-500" weight="bold" :text="props.game"></UiText>
        </UiFlex>
        <div class="w-[10px] h-[10px] bg-green-500 rounded-[50%]"></div>
    </UiFlex>
</template>
<script setup>
    const props = defineProps(['img', 'name', 'game'])
</script>