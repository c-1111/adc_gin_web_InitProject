<script setup>
const carouselImages = [
  '/img/carousel_img1.png',
  '/img/carousel_img2.png',
  '/img/carousel_img3.png',
]
const bottles = [
  '/img/aura_gin_bott.png',
  '/img/assente_amaro_bott.png',
  '/img/erarosa_biter_bott.png',
]

const marqueeItems = [
"CREATO PER SORPRENDERE",

]
</script>

<template>
  <main class="main">
    <image-and-text-block />

    <Marquee :items="marqueeItems" :duration="16" />


    <bottles-together :bottles="bottles" />

    <horizontal-tag />

    <carousel :carouselImages="carouselImages" />

    <newsletter />
  </main>
  <adc_footer />
</template>


<style scoped></style>