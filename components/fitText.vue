<!-- components/FitText.vue -->
<template>
  <div ref="container" class="w-full h-auto flex items-center justify-center overflow-hidden">
    <span ref="text" class="whitespace-nowrap">
      <slot />
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const container = ref(null)
const text = ref(null)
let observer

function fitTextToWidth(textEl, containerEl, maxFontSize = 300) {
  const ctx = document.createElement('canvas').getContext('2d')
  const containerWidth = containerEl.clientWidth
  let fontSize = maxFontSize
  const content = textEl.textContent

  while (fontSize > 1) {
    ctx.font = `${fontSize}px sans-serif`
    const textWidth = ctx.measureText(content).width
    if (textWidth <= containerWidth) break
    fontSize -= 1
  }

  textEl.style.fontSize = fontSize + 'px'
}

const resizeAndFit = () => {
  if (text.value && container.value) {
    fitTextToWidth(text.value, container.value)
  }
}

onMounted(async () => {
  await nextTick()
  resizeAndFit()

  observer = new ResizeObserver(resizeAndFit)
  observer.observe(container.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
