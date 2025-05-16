<script setup>
const props = defineProps({
    herocontent: Array,
});
</script>


<template>
    <section class="container component-container px-4 mb-40">
        <div class="img_container w-full flex justify-center subtitle border-1 border-adcwhite"> <img :src="herocontent.heroimg"
                :alt="herocontent.heroalt" class="w-full">
        </div>
        <div class="tag">
            <FitText class="font-FeatureDeckCond font-medium border-b-adcwhite border-b-1">{{ herocontent.herotag }}</FitText>
        </div>
        <div class="tag_subtitle"><p class="h1_serif max-w-[30ch] mt-6">{{ herocontent.herosubtitle }}</p></div>
    </section>

</template>
<style scoped></style>