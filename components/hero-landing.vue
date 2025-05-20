<script setup>
const props = defineProps({
    herocontent: Array,
});
</script>

<template>
    <section class="container component-container px-4 mb-20 text-adcblack max-lg:mb-12">

        <div class="tag">
        </div>
        <div class="tag_subtitle">
            <p
                class="font-FoundersCond font-bold uppercase border-b-1 border-adcblack text-justify pb-6 utility_class max-lg:pb-3">
                Siamo una piattaforma multidisciplinare che ridefinisce l’esperienza del bere attraverso la ricerca
                dell’inaspettato.</p>
        </div>
        <div class="tag_subtitle">
            <!-- CHANGE FONT TO CONDENSED REGULAR -->
            <p class="h1_serif utility_class2 max-w-[60ch] mt-4 max-lg:mt-2">Creiamo spiriti senza tempo, pensati per
                trasformare
                ogni momento in un’occasione intensa e memorabile. <br> Non ci limitiamo a servire bevande: offriamo
                emozioni, presenza e connessione autentica. Dall’idea alla ricetta, fino alla produzione, curiamo ogni
                dettaglio con attenzione e passione, dando vita a prodotti originali, curati e sorprendenti. <br> A.D.C.
                non è solo ciò che bevi. È come ti fa sentire.</p>
        </div>

    </section>

</template>

<style scoped lang="scss">
.utility_class {
    font-size: 10rem;
    line-height: 1;
    line-height: 80%;


    @media (width < 768px) {
        font-size: 40px;

    }
}

.utility_class2 {
    line-height: 110%;


    @media (width < 768px) {
        font-family: "Feature Deck Condensed";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
    }
}
</style>