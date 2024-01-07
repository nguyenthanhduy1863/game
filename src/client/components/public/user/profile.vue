<template>
  <UiFlex>
    <UAvatar 
      src="https://avatars.githubusercontent.com/u/739984?v=4"
      alt="Avatar"
      
    />
  </UiFlex>
</template>

<script setup>
const props = defineProps(['user'])

const loading = ref(true)
const user = ref(undefined)

const getUser = async () => {
  try {
    loading.value = true
    const data = await useAPI('user/profile', {
      _id: props.user
    })

    user.value = data
    loading.value = false
  }
  catch (e){
    loading.value = false
  }
}
</script>