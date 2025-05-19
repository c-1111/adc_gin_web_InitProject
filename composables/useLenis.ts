// import { onMounted, onBeforeUnmount } from 'vue'
// import Lenis from '@studio-freight/lenis'

// export function useLenis() {
//   let lenis: Lenis | null = null

//   onMounted(() => {
//     lenis = new Lenis()

//     const raf = (time: number) => {
//       lenis?.raf(time)
//       requestAnimationFrame(raf)
//       console.log("Lenis Working via composable");
      
//     }

//     requestAnimationFrame(raf)
//   })

//   onBeforeUnmount(() => {
//     lenis?.destroy()
//     lenis = null
//   })
// }