<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Тема slots</h2>
    </div>

    <app-list>
      <!--      <template #default="slotProps">-->
      <template #default="{ iter, idx }">
        <span style="color: #c25205;">
          <strong>{{ idx + 1 }}</strong>
          Item {{ iter }}
        </span>
      </template>
      <template #footer="{ currentIndex }">
        <span style="color: blue;">{{ currentIndex }}</span>
      </template>
    </app-list>

    <app-block>
      <p>
        Этот текст из App.vue
      </p>

      <template #header>
        <h3>
          Это заголовок
        </h3>
      </template>

      <template v-slot:footer>
        <hr>
        <small>Это footer</small>
      </template>
    </app-block>
  </div>
</template>

<script>

import AppBlock from "./AppBlock";
import AppList from "./AppList";

export default {
  name: "App",
  components: {AppBlock, AppList}
}
</script>

<style scoped>
</style>
