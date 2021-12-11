<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамичесие и асинхронные компоненты</h2>

      <app-button
          :color="oneColor"
          @action="active = 'one'"
      >
        one
      </app-button>
      <app-button
          :color="twoColor"
          @action="active = 'two'"
      >
        two
      </app-button>
    </div>

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>

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
  mounted() {
    setTimeout(() => {
      this.componentName = 'new comp name'
    }, 2000)
  },
  computed: {
    // componentName () {
    //   // if (this.active === 'one') {
    //   //   return 'app-text-one'
    //   // }
    //   // return 'app-text-two'
    //
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get() {
        return 'app-text-' + this.active
      },
      set(value) {
        console.log('componentName ', value)
      }
    },
    oneColor () {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor () {
      return this.active === 'two' ? 'primary' : ''
    }
  }
}
</script>

<style scoped>
</style>
