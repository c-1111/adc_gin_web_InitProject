<script setup>
const props = defineProps({
    bottles: Array,
    overlayedText: String,
});
</script>


<template>
    <section class="container component-container px-4 w-full flex justify-center pb-72 my-40">
        <div class="back relative">
            <div class="txt_container max-w-[74ch] text-center">
                <p class="h1_serif">{{ overlayedText }}</p>
            </div>
            <div class="front w-full">
                <div class="imgs_container w-full flex gap-40 justify-center absolute top-60">
                    <img v-for="(bottle, index) in bottles" :key="index" :src="bottle.img" :alt="bottle.name" />
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
