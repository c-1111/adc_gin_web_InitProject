<script setup>
const props = defineProps(['hero2content'])
</script>

<template>
    <section  class="container component-container px-4 flex flex-col gap-8 my-20">
        <div class="txt_top h1_serif flex justify-center w-full">
            <p class=" max-w-[40ch] text-center">{{ hero2content.title }}</p>
        </div>
        <div class="img_container w-full flex justify-center subtitle border-1 border-adcwhite">
             <img :src="hero2content.img" :alt="hero2content.alt" class="w-full"> </div>
        <div class="txt_bttm flex justify-center w-full">
            <p class=" subtitle max-w-[85ch] text-center">{{ hero2content.subtitle }}</p>
        </div>
    </section>
</template>
<style scoped>
</style>