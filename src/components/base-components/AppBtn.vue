<template>
  <button
    class="btn primary"
    :disabled="isDisabled"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'AppBtn',
  props: {
    isDisabled: {
      type: Boolean
    },
    value: {
      type: String
    },
    text: {
      type: String
    }
  },
  emits: ['myClick']
}
</script>
