<script setup lang="ts"></script>

<template>
  <ImageCarousel
    class="padd"
    :buttonVisibile="true"
    :size="2"
    :overflow="false"
    :data="[
      { image: 'https://picsum.photos/200/300' },
      { image: 'https://picsum.photos/200/300' },
      { image: 'https://picsum.photos/200/300' },
      { image: 'https://picsum.photos/200/300' },
      { image: 'https://picsum.photos/200/300' },
      { image: 'https://picsum.photos/200/300' },
    ]"
  />
</template>

<style>
.padd {
  max-width: 700px;
  margin: 0 auto;
}

#app {
  width: 100%;
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
  margin: 0;
}
</style>
