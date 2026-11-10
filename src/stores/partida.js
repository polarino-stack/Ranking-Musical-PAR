import { ref } from 'vue'

export const answerStates = ref({})
export const gameFinished = ref(false)

export function resetPartida() {
  answerStates.value = {}
  gameFinished.value = false
}
