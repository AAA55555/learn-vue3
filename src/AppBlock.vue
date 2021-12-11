<template>
  <div class="card">
    <slot name="header"></slot>
    <slot>
      Этот текст выведется, если родитель не передавал ничего
    </slot>
    <div v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBlock"
}
</script>

<style scoped>

</style>
