<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамичесие и асинхронные компоненты</h2>

      <app-button
          :color="active === 'one' ? 'primary' : ''"
          @action="active = 'one'"
      >
        one
      </app-button>
      <app-button
          :color="active === 'two' ? 'primary' : ''"
          @action="active = 'two'"
      >
        two
      </app-button>
    </div>

    <component :is="componentName"></component>

  </div>
</template>

<script>

import AppButton from "./AppButton";
import AppTextOne from "./AppTextOne";
import AppTextTwo from "./AppTextTwo";
export default {
  name: "App",
  components: {AppButton, AppTextOne, AppTextTwo},
  data() {
    return {
      active: 'one' //two
    }
  },
  computed: {
    componentName () {
      // if (this.active === 'one') {
      //   return 'app-text-one'
      // }
      // return 'app-text-two'

      return 'app-text-' + this.active
    }
  }
}
</script>

<style scoped>
</style>
