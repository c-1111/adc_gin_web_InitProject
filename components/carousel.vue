<script setup>
defineProps({
    carouselImages: {
        type: Array,
        required: true
    }
})


import { onMounted } from 'vue';
import emblaCarouselVue from 'embla-carousel-vue';

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true, container: '.embla__container' });

function logSlidesInView(emblaApi) {
    console.log(emblaApi.slidesInView());
}

onMounted(() => {
    if (emblaApi.value) {
        emblaApi.value.on('slidesInView', logSlidesInView);
    }
});

function prevSlide() {
    emblaApi.value.scrollPrev();
}

function nextSlide() {
    emblaApi.value.scrollNext();
    console.log(emblaApi.value, emblaRef);
}

</script>


<template>
    <section class="carousel_container">
        <div class="embla" ref="emblaRef">
            <div class="embla__viewport">
                <div class="embla__container">

                    <div class="embla__slide" v-for="(img, index) in carouselImages" :key="index">
                        <svg viewBox="0 0 465 500" class="w-[465px] h-[500px] mx-auto">
                            <defs>
                                <clipPath id="custom-shape" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 232.5C0 104.094 104.094 0 232.5 0S465 104.094 465 232.5V500H0V232.5Z" />
                                </clipPath>
                            </defs>

                            <image :xlink:href="img" width="465" height="500" clip-path="url(#custom-shape)"
                                preserveAspectRatio="xMidYMid slice" />
                        </svg>
                    </div>

                </div>
            </div>
            <div>
                <button @click="prevSlide">Prev</button>
                <button @click="nextSlide">Next</button>
            </div>
        </div>
    </section>
</template>


<style scoped>
.embla {
    overflow: hidden;
}

.embla__container {
    display: flex;
}

.embla__slide {
    min-width: 0;
}
</style>