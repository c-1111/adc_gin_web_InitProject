<script></script>
<template>
    <section
        class="container component-container px-4">
        <div
            class="wrapper bg-[url(/public/img/sky_clouds.gif)] bg-no-repeat bg-cover bg-center text-adcblack w-full p-4 border-1 border-adcblack">
            <div class="newletter_top pb-11 border-b-1">

                <p class="h1_serif">Lorem ipsum dolor sit amet, newsletter!</p>
            </div>
            <div class="flex w-full justify-between pt-3.5 pb-28">
                <div class="bttm_left">
                    <div class="subtitle h-12 border-1 border-adcblack flex flex-nowrap">
                        <input type="text" name="" id="" class="p-2" placeholder="Inserisci la tua mail">
                        <button class="bg-adcblack px-10 flex items-center h-full CTA text-adcwhite">Iscriviti
                        </button>
                        <!-- NO FONT OPTIMIZATION FOR WEB -> LINE-HEIGHN UNCONTROLLABLE -->
                    </div>
                </div>
                <div class="bttm_right max-w-[60ch] text-right">
                    <p class="subtitle">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip
                        ex.</p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.newsletter_subtitle {
    border: 1px color Red;
}

.text_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>