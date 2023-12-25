<template>
  <div 
    class="
      inline-block 
      relative 
      overflow-hidden 
      select-none 
      pointer-events-none
    " 
    :style="{
      'aspect-ratio': ratio,
      'width': w ? `${w}px` : null,
      'height': h ? `${h}px` : null,
    }
  ">
    <NuxtImg 
      :src="imgLink(src)" 
      class="object-cover w-full h-full select-none" 
      :sizes="props.sizes" 
      :width="props.imgW"
      :height="props.imgH"
      quality="100" 
      format="webp" 
      fit="cover" 
      :loading="!!preload ? 'eager' : 'lazy'"
      :preload="preload"
      placeholder="/images/placeholder.png"
      :alt="props.alt"
      @load="onLoad" 
    />

    <USkeleton v-if="!!loading" class="absolute top-0 left-0 rounded-none w-full h-full" />
  </div>
</template>
  
<script setup>
const { imgLink } = useMakeLink()

const props = defineProps({
  src: String,
  w: [String, Number],
  h: [String, Number],
  ratio: { type: String, default: 'auto' },
  sizes: String,
  imgW: [String, Number],
  imgH: [String, Number],
  alt: { type: String, default: 'image' },
  preload: { type: Boolean, default: false },
})

const loading = ref(true)
const onLoad = () => loading.value = false
</script>
  
  