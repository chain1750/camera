<script setup>
import config from '@/config'
</script>

<template>
  <div px-6 py-3 f-b-c h-20>
    <a :href="config.link">
      <div inline-flex gap-5 items-center>
        <img h-6 w-6 :src="config.avatar" alt="avatar">
        <div text-6 font-bold>
          {{ config.title }}
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped></style>
