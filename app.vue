<script setup>

const herocontent = [
  {
    herotag: "MERAVIGLIA LIQUIDA",
    heroimg: '/img/hero_img.png',
    heroalt: 'hero-2 img',
    herosubtitle: 'Distillato con passione in Italia. Da bere responsabilmente, quando conta davvero.',
  },
]

const marqueeItems = [
  "CREATO PER SORPRENDERE",
]


const flexOverlayContent = [
  {
    productName: "AURA GIN",
    img: '/img/aura_gin_bott.png',
    alt: 'Aura Gin Bottle png',
    subtitle: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
]


const hero2content = [
  {
    title: "Creiamo drink senza tempo, pensati per trasformare ogni momento in un’esperienza intensa e memorabile.",
    img: '/img/drinking_img.png',
    alt: 'hero-2 img',
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
]


const overlayedText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."

const bottles = [
  {
    name: "Aura Gin",
    img: '/img/aura_gin_bott.png'
  },
  {
    name: "Assente Amaro",
    img: '/img/assente_amaro_bott.png'
  },
  {
    name: "Erarosa Biter",
    img: '/img/erarosa_biter_bott.png'
  }
]



const carouselImages = [
  '/img/carousel_img1.png',
  '/img/carousel_img2.png',
  '/img/carousel_img3.png',
]




// ATT to naming conventions. NO concrete examples. Names from the structure of the component ex. product-grid-with-text INSTEAD OF bottles-together
// NO html classes to name the component
// BEM css for class naming (block-element-modifier)
// ID use only for scroll point getting behaviors url#id --> [scroll-behavior: smooth;] navigates to point. 
// Separate CSS sheets




//------------------------------TO-DO--------------------------
// NO V-FOR IN COMPONENTS *done?
// CONTAINER & COMPONENT-CONTAINER CLASSES TO MANAGE MEDIAQUERYS *done?
// CUSTOM PADDINGS ON EACH SEACTION done*

// HEADER STICKY BEHAVIOUR ON SCROLL, SMALLER
// different screens width management
// responsive?
// CAROUSEL
// FIX fitText COMPONENT
</script>

<template>
  <adc_header />

  <main class="main">

    <Hero :herocontent="e" v-for="(e, i) in herocontent" :key="i"/>

    <Marquee :items="marqueeItems" :duration="16" />

    <product-flex-overlay :flexOverlayContent="e" v-for="(e, i) in flexOverlayContent" :key="i" />

    <Marquee :items="marqueeItems" :duration="16" />

    <hero-2 :hero2content="e" v-for="(e, i) in hero2content" :key="i" />

    <ProductsOverlayText :bottles :overlayedText />

    <horizontal-tag />

    <carousel :carouselImages="carouselImages" />

    <newsletter />

  </main>

  <adc_footer />

</template>

<style></style>
