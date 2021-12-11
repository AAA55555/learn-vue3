<template>
  <div class="card">
    <ul>
      <li v-for="(item, i) in 5" :key="item">
        <slot :iter="item" :idx="i"></slot>
      </li>
    </ul>

    <ul>
      <li v-for="index in 3" :key="index">
        <h2>
          <slot name="footer" :currentIndex="index"></slot>
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppList"
}
</script>

<style scoped>

</style>
