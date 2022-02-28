<template>
  <the-navbar />
  <div class="container with-nav">
    <div class="card">
      <h1>{{ uppercaseTitle }}</h1>
      <h2>Счетчик {{ counter }} ({{doubleCounter}})</h2>
      <button class="btn primary" @click="add">Добавить</button>
      <button class="btn danger" @click="incrementAsync({value: 10, delay: 500})">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  components: {TheNavbar},
  //не именнованные модули-namespaced
  // computed: {
  //   ...mapGetters(['counter', 'doubleCounter', 'uppercaseTitle'])
  // },
  computed: {
    ...mapGetters(['uppercaseTitle']),
    ...mapGetters('count', ['counter', 'doubleCounter'])
  },
  methods: {
    ...mapMutations({
      add: 'count/increment'
    }),
    // add() {
      // this.$store.commit('increment')
    // },
    ...mapActions('count', ['incrementAsync']),
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync', {
    //     value: 10,
    //     delay: 500
    //   })
    // }
  }
}
</script>
