<script setup>
const carouselImages = [
  '/img/carousel_img1.png',
  '/img/carousel_img2.png',
  '/img/carousel_img3.png',
]
const bottles = [{
  name: "Aura Gin",
  img: '/img/aura_gin_bott.png'
}, {
  name: "Aura Gino",
  img: '/img/aura_gin_bott.png'
}

]

const old_bottles = [

  '/img/assente_amaro_bott.png',
  '/img/erarosa_biter_bott.png',
]

const marqueeItems = [
  "CREATO PER SORPRENDERE",

]
// comments missing propr for image-and-text-block
// full props for bottles
// convert bottles array to array of objects
// watch out for naming convantion ( Hero is ok , Marquess is ok , they are funcitonal names - wrong is Bottles together, carousel is ok, newsletter ok ...
// i would call bottles together as product-grid-with-text with products array and text as prop)

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