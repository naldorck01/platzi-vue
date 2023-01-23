<script setup>
const props = defineProps({
  id: { type: Number },
})

console.log(props)
</script>

<template>
  <h1>ID Order {{ this.$route.params.id }}</h1>
</template>

<style scoped></style>
