<script setup>

const carouselImages = [
  '/img/carousel_img1.png',
  '/img/carousel_img2.png',
  '/img/carousel_img3.png',
]
</script>

<template>
  <main class="main">
  <carousel :carouselImages="carouselImages" />
    <newsletter />
  </main>
<adc_footer />
</template>


<style scoped></style>