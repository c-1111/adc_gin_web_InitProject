<script setup>
const props = defineProps(['flexOverlayContent'])
</script>


<template>
    <section class="container component-container px-4 mb-10 pb-40 w-full">
        <div class="border-b-adcwhite border-b-1">
            <FitText class=" container component-container px-4 font-FoundersCond font-bold leading-none w-full mb-12">
                {{ flexOverlayContent.productName }}
            </FitText>
        </div>
        <div class="container component-container">
            <div class="bottle_img absolute ml-[20rem] mt-[-10rem]"> <img :src="flexOverlayContent.img" :alt="flexOverlayContent.alt">
            </div>
            <div class="flex justify-between ">
                <div class="product_caption w-full flex justify-end">
                    <p class="h1_serif max-w-[30ch] text-right">{{ flexOverlayContent.subtitle }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>