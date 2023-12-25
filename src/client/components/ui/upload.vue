<template>
  <div>
    <input type="file" ref="input" accept=".jpg,.jpeg,.png,.webp" hidden @change="onFileChange">
    <slot :onLoading="loading" :onSelect="onFileSelect"></slot>
  </div>
</template>
  
<script setup>
const { $API } = useNuxtApp()
const toast = useToast()
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const input = ref()
const loading = ref(false)

const onFileSelect = () => input.value.click()
const onFileChange = async (e) => {
  try {
    if (!!loading.value) return
    loading.value = true

    const files = e.target.files
    if (!files || files.length == 0) throw 'Vui lòng chọn hình ảnh trước'
    const file = files[0]

    const isImage = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/webp'
    if (!isImage) throw 'Chỉ hỗ trợ tệp hình ảnh (jpg|jpeg|png|webp)'

    const is10MB = file.size / 1024 / 1024 < 10
    if (!is10MB) throw 'Chỉ hỗ trợ ảnh kích thước tối đa 10MB'

    const formData = new FormData()
    formData.append('image', file)

    const url = await useAPI($API.Upload.Image, formData)

    loading.value = false
    emit('update:modelValue', url)
  }

  catch (e) {
    loading.value = false

    if (!!e) toast.add({
      title: 'Thông Báo',
      description: e.toString(),
      color: 'red',
      icon: 'i-bx-upload'
    })
  }
}

</script>
  
  