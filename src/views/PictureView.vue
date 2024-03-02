<script setup>
import { ref } from 'vue'
import Data from '@/assets/data/images.json'

const dataList = Data
const imgInfo = ref({})
const boxEnable = ref(false)

function getInfo(item) {
  imgInfo.value = item
  boxEnable.value = true
}

function closeBox() {
  boxEnable.value = false
}
</script>

<template>
  <!-- lightbox -->
  <div v-if="boxEnable" @click="closeBox">
    <div bg-black class="opacity-80 absolute fixed h-[100%] wh-full top-0 z-1" />
    <div>
      <div flex flex-col absolute fixed w-full items-center z-50>
        <div>
          <img :src="imgInfo.url" rounded-lg h-75vh alt="">
        </div>
        <div mt-2 style="color: white">
          {{ imgInfo.desc }}
        </div>
      </div>
      <div class="text-white dark:text-blue-500" f-c-c absolute w-full bottom-5vh z-50 />
    </div>
  </div>
  <div v-for="data in dataList">
    <div mx-3 my-3 style="color: #6f6f6f; font-size: 20px; text-align: center">—— {{ data.month }} ——</div>
    <!-- main -->
    <div mx-3 gap-4 absolute columns-1 lg:columns-4 md:columns-3 sm:columns-2 xl:columns-5>
      <div v-for="(item, index) in data.images" :key="index" @click="getInfo(item)">
        <img v-lazy="item.url" mb-2 rounded w-full>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
