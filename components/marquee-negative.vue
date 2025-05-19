<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  duration: {
    type: Number,
    default: 20
  }
});
// Asegura que siempre haya elementos para animar
const displayItems = computed(() => 
  props.items.length === 0 ? [] : 
  props.items.length === 1 ? [...props.items, ...props.items, ...props.items, ...props.items, ...props.items, ...props.items, ...props.items] : 
  props.items
);
// Calcula el ancho aproximado del contenido para ajustar la animación
const marqueeStyle = computed(() => ({
  animationDuration: `${props.duration}s`,
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear'
}));
</script>

<template>
  <section 
    v-if="displayItems.length > 0"
    class="overflow-hidden whitespace-nowrap bg-adcblack py-3"
  >
    <div class="inline-flex animate-marquee" :style="marqueeStyle">
      <!-- Contenido duplicado para el loop continuo -->
      <span 
        v-for="(item, index) in displayItems" 
        :key="`${index}-1`"
        class=" h1_serif text-adcwhite mr-10"
      >
        {{ item }}
      </span>
      <span 
        v-for="(item, index) in displayItems" 
        :key="`${index}-2`"
        class="h1_serif text-adcwhite mr-10"
      >
        {{ item }}
      </span>
    </div>
  </section>
</template>
<style scoped></style>