<script setup>
useHead({
  title: 'Anonima Distilleria Creativi',
  meta: [
    { name: 'description', content: 'la piattaforma creativa e multidisciplinare che rimodella il mondo del beverage attraverso la meraviglia e la sorpresa.' }
  ]
})
import { LandingFooter } from '#components'
import { VueLenis, useLenis } from 'lenis/vue'
import { watch } from 'vue'

const lenis = useLenis(({ scroll }) => {
  // called every scroll
})

watch(lenis, (lenis) => {
  // lenis instance
})

const disclaimer = ref(true)
const herocontent = [
  {
    herotag: "MERAVIGLIA LIQUIDA",
    heroimg: '/img/hero_img.png',
    heroalt: 'hero-2 img',
    herosubtitle: 'Distillato con passione in Italia. Da bere responsabilmente, quando conta davvero.',
  },
]

const marqueeItems = [
  "COMING SOON",
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

const setDisclaimer = () => {
  disclaimer.value = false
}

const exit = () => {
  window.location = "https://www.google.com"
}


//------------------------------TO-DO--------------------------
// different screens width management
// responsive?


</script>

<template>
  <vueLenis root class="">
    <div class="disclaimer" v-if="disclaimer">
      <div>
        <p class="font-FeatureDeckCond ">Sei Maggiorenne?</p>
        <br>
        <div class="buttons">
          <button @click="setDisclaimer">Sì</button>
          <button @click="exit">No</button>
        </div>
      </div>
    </div>
    <header_landing />

    <main class="main bg-adcwhite">

      <Hero-landing :herocontent="e" v-for="(e, i) in herocontent" :key="i" />

      <Marquee-negative :items="marqueeItems" :duration="16" />

      <LandingContact />

    </main>

    <LandingFooter />

  </vueLenis>
</template>

<style scoped lang="scss">
.disclaimer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: Black;
  color: White;

  p {
    font-size: 20px;
  }

  .buttons {
    text-align: center;
    display: flex;
    justify-content: center;

    button {
      text-transform: uppercase;
      cursor: pointer;
      margin: 0 6px;
      padding: 2px 10px;
      border: 1px solid White;

      &:hover {
        background-color: White;
        color: Black;
      }
    }
  }
}
</style>
