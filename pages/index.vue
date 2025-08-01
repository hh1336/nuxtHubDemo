<script setup lang="ts">

const { data: post } = await useAsyncData(() => queryCollection('content').path('/').first());

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description 
})
</script>

<template>
  <ContentRenderer v-if="post" :value="post" />
</template>
