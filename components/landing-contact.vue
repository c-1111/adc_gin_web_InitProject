<script setup>
const submitted = ref(false);
const body = ref({
    email: null
})
const submit = async () => {
    submitted.value = true;
    const endpoint = `https://works.display.design/api/submissions?&email=${body.value.email}&client=adc`

    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    const result = await response.json();
    console.log(result)
};
const message = computed(() => {
    return submitted.value ? "Grazie" : "Iscriviti"
})
</script>


<template>
    <section class="container component-container px-4 mt-20 mb-4 max-lg:mt-14">
        <div
            class="h-full w-full min-h-[540px] flex justify-center items-center border-1 border-adcblack bg-[url(/public/img/landing_contact_bg.gif)] bg-no-repeat bg-cover bg-center">
            <div class="wrapper flex flex-col justify-center gap-10 max-w-[1050px] max-lg:p-4">
                <div class="h1_serif text-adcwhite text-center">
                    Per restare in contatto con noi registrati al seguente form
                </div>
                <!-- CHANGE FONT TO CONDENSED REGULAR -->

                <form class="flex justify-center h-auto" @submit.prevent="submit">
                    <div
                        class="subtitle h-12 border-1 w-full border-adcwhite flex flex-nowrap max-lg:flex-col max-lg:h-auto max-lg:items-center">
                        <input type="email" required class="p-2 text-adcwhite text-[20px] w-full"
                            placeholder="Inserisci la tua mail" v-model="body.email">
                        <button
                            class="bg-adcwhite px-10 flex items-center h-full CTA text-adcblack max-lg:min-h-10 max-lg:w-full max-lg:px-0 max-lg:justify-center">
                            {{ message }}
                        </button>
                        <!-- same width as parent -->

                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>