<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import { Howl } from 'howler'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
})

const isPlaying = ref(false)
const playbackError = ref(false)
let player

watch(
  () => props.src,
  (src) => {
    player?.unload()
    isPlaying.value = false
    playbackError.value = false
    player = new Howl({
      src: [src],
      onplay: () => {
        isPlaying.value = true
      },
      onpause: () => {
        isPlaying.value = false
      },
      onstop: () => {
        isPlaying.value = false
      },
      onend: () => {
        isPlaying.value = false
      },
      onloaderror: () => {
        playbackError.value = true
      },
      onplayerror: () => {
        playbackError.value = true
      },
    })
  },
  { immediate: true },
)

function togglePlayback() {
  if (!player) return

  if (player.playing()) {
    player.pause()
    return
  }

  playbackError.value = false
  player.play()
}

onBeforeUnmount(() => {
  player?.unload()
})
</script>

<template>
  <button
    class="record-center"
    type="button"
    :aria-label="playbackError ? 'Error al reproducir; volver a intentar' : isPlaying ? 'Pausar canción' : 'Reproducir canción'"
    :aria-pressed="isPlaying"
    @click="togglePlayback"
  ></button>
</template>

<style scoped>
.record-center {
  width: 0.8rem;
  aspect-ratio: 1;
  padding: 0;
  border: 4px solid #f0c66e;
  border-radius: 50%;
  background: #201b34;
  cursor: pointer;
}

.record-center:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 4px;
}
</style>
