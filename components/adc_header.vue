<script setup>
const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = Math.min(window.scrollY, 100)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

const scrollStyle = computed(() => {
  const progress = Math.min(scrollY.value / 100, 1)
  return {
    '--scale': 1 - (progress * 0.2), // *0.x controlls reduction
    '--header-height': `${280 - (progress * 150)}px` //*0.x controlls reduction
  }
})
</script>
<template>
  <header :style="scrollStyle" class="container component-container sticky bg-adcblack top-0 px-4">
    <div class="logo-container h-full flex items-center">
      <svg class="logo w-auto" xmlns="http://www.w3.org/2000/svg" width="1248" height="254" fill="none"
        viewBox="0 0 1248 254" preserveAspectRatio="xMidYMid meet">
        <path fill="#F9F6F6"
          d="M74.65 4.66 0 249.139h63.813l13.159-47.343h72.327l13.158 47.343h67.311L155.09 4.659H74.65Zm16.254 147.867 21.644-77.601h1.548l21.672 77.601H90.904Zm206.146 96.814h81.444v-81.714H297.05v81.714ZM540.75 4.66h-80.125v244.68h80.125c73.159 0 123.098-45.819 123.098-122.327 0-76.507-49.939-122.355-123.098-122.355Zm-4.644 192.65h-9.689V56.69h9.689c34.831 0 60.001 25.628 60.001 69.922s-25.17 70.698-60.001 70.698Zm196.6 52.031h81.444v-81.714h-81.444v81.714Zm261.675-53.211c-26.317 0-42.972-27.583-42.972-69.116 0-41.532 16.655-69.144 42.972-69.144 24.399 0 33.679 20.594 37.929 44.265l60-26.404C1079.92 30.69 1046.64 0 993.98 0c-61.549 0-109.538 51.657-109.538 127.014C884.442 202.372 932.431 254 993.98 254c56.9 0 90.19-35.349 100.25-85.827l-61.55-19.414c-3.87 24.85-12.79 47.371-38.328 47.371h.029Zm172.179-28.503v81.714H1248v-81.714h-81.44Z" />
      </svg>
    </div>
    <div class="header_CTAs fixed top-4 right-4 w-full flex justify-end">
      <div class="flex flex-col flex-end items-end gap-6">
        <button>
          <a class="CTA_service">CART</a>
        </button>
        <button>
          <a class="CTA_service">CONTACT</a>
        </button>
      </div>
    </div>
    <div class="line border-b-1 border-adcwhite box-border"></div>
  </header>
</template>

<style scoped>
header {
  height: var(--header-height, 280px);
  transition: all 0.2s ease;
  z-index: 1000;
}

.logo {
  height: calc(var(--header-height, 280px) * .9);
  /* 90% header height */
  transition: all 0.2s ease;
}
</style>