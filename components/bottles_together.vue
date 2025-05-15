<script setup>
defineProps({
    bottles: {
        type: Array,
        required: true
    }
})
</script>


<template>
    <section class="bottle_container w-full flex justify-center pb-72 my-40">
        <div class="back relative">
            <div class="txt_container max-w-[74ch] text-center">
                <p class="h1_serif">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.</p>
            </div>
            <div class="front w-full">
                <div class="imgs_container w-full flex gap-40 justify-center absolute top-60">
                    <img class="max-h-96" src="/public/img/aura_gin_bott.png" alt="AURA GIN">
                    <img class="max-h-96" src="/public/img/assente_amaro_bott.png" alt="ASSENTE AMARO">
                    <img class="max-h-96" src="/public/img/erarosa_biter_bott.png" alt="ERAROSA BITTER">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>

<!-- getting the images from the app script -->

  <!-- <div class="imgs_container w-full flex gap-40 justify-center relative">
                    <pre>{{ bottles }}</pre>
                    <img v-for="bottle in bottles" :key="bottle.id" :src="bottle.url" class="relative top-60"
                        :alt="bottle.alt || 'Bottle'" />
                </div> -->