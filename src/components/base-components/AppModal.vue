<template>
  <div>
    <h1>{{ content.title }}</h1>
    <p>{{ content.text }}</p>
    <button @click="$emit('close')">Закрыть</button>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    content: {
      default: {
        title: 'Ошибка!!!',
        text: 'Произошла ошибка!!!'
      }
    }
  },
  emits: ['close']
}
</script>

<style scoped>
  div {
    background: white;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 25px;
  }
</style>
