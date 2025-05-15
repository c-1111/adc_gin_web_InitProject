<script></script>
<template>
    <section
        class="newsletter_container bg-[url(/public/img/sky_clouds.gif)] bg-no-repeat bg-cover bg-center text-adcblack w-full p-4">
        <!-- <div class="img_bg"><img src="/public/img/sky_clouds.gif" alt="">sky_clouds_gif</div> -->
        <div class="newletter_top pb-11 border-b-1">
            <p class="h1_serif">Lorem ipsum dolor sit amet, newsletter!</p>
            <p class="newsletter_subtitle">not tailwind</p>
        </div>
        <div class="newsletter_bttm flex w-full justify-between pt-3.5 pb-28">
            <div class="bttm_left">
                <div class="subtitle h-12 border-1 border-adcblack flex flex-nowrap">
                    <input type="text" name="" id="" class="p-2" placeholder="Inserisci la tua mail">
                    <button class="bg-adcblack px-10 flex items-center h-full CTA text-adcwhite">Iscriviti
                    </button>
                    <!-- something happening with the font and the alignment -->
                </div>
            </div>
            <div class="bttm_right max-w-[60ch] text-right">
                <p class="subtitle">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex.</p>
            </div>
        </div>
        <div class="text_container">
            <div class="text_container_col">start</div>
            <div class="text_container_col">end</div>
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