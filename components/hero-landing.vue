<script setup>
const props = defineProps({
    herocontent: Array,
});
</script>

<template>
    <section class="container component-container px-4 mb-40 text-adcblack">
        <div class="img_container w-full flex justify-center subtitle border-1 border-adcblack  max-h-[800px]"> <img :src="herocontent.heroimg"
                :alt="herocontent.heroalt" class="w-full object-cover">
        </div>
        <div class="tag">
        </div>
        <div class="tag_subtitle"><p class="font-FoundersCond font-bold text-[10rem] leading-35 uppercase mt-6 border-b-1 border-adcblack text-justify pb-6">la piattaforma creativa e multidisciplinare che rimodella il mondo del beverage attraverso la meraviglia e la sorpresa.</p></div>
                <div class="tag_subtitle"><p class="h1_serif max-w-[60ch] mt-6">Creiamo spiriti senza tempo, progettati per trasformare qualsiasi momento in un'esperienza intensa e indimenticabile. Non ci limitiamo a servire bevande, ma offriamo emozioni, presenza e connessione. 
Dall'idea alla ricetta, fino alla produzione, gestiamo con cura ogni dettaglio dei nostri alcolici, creando prodotti autentici e inaspettati.</p></div>

    </section>

</template>