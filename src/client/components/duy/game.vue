<template>
    <div class="w-[300px]">
        <UiImg class="w-[300px] h-[120px] rounded-[20px]" :src="img"></UiImg>
        <div>
            <UiFlex justify="between">
                <UiText class="text-[15px]" weight="bold">Cyberpunk</UiText>
                <UiFlex >
                    <UiIcon class="text-[11px] text-gray-500" name="material-symbols:nest-clock-farsight-analog-outline"></UiIcon>
                    <UiText class="text-[11px] text-gray-500">126 hours</UiText>
                </UiFlex>
            </UiFlex>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps(['img'])
</script>