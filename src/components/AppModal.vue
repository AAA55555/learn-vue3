<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Это заголовок модалки</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa deleniti eligendi soluta. Eos facilis, itaque quisquam tenetur vero voluptatem.</p>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  emits: ['close']
}
</script>

<style scoped>

</style>
