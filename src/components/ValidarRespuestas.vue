<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: 'Validar respuesta',
  },
})

defineEmits(['validate'])
</script>

<template>
  <button
    class="validate-button"
    type="button"
    :disabled="disabled"
    @click="$emit('validate')"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.validate-button {
  display: block;
  margin: 1.5rem auto 0;
  padding: 0.85rem 1.5rem;
  border: 0;
  border-radius: 0.65rem;
  background: #30294a;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  transition: background-color 160ms ease;
}

.validate-button:hover:not(:disabled) {
  background: #171329;
}

.validate-button:focus-visible {
  outline: 3px solid #d6a84f;
  outline-offset: 3px;
}

.validate-button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}
</style>
