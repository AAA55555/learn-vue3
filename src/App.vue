<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import {useStore} from 'vuex'

export default {
  created() {
    useStore().dispatch('getTask')
  },
  components: {
    TheNavbar
  }
}
</script>
