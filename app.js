const h = Vue.h

const app = Vue.createApp({
  data() {
    return {
      title: 'Это из свойства template'
    }
  },
  methods: {
    changeTitle() {
      console.log(this)
      this.title = 'Изменили!'
    }
  },
  // template: `
  //   <div class="card center">
  //       <h1>{{ title }}</h1>
  //       <button class="btn" @click="title = 'Изменили!!!'">Изменить</button>
  //   </div>
  // `
  render() {
    return h('div', {
      class: 'card center'
    }, [
      h('h1', {}, this.title),
      h('button', {
        class: 'btn',
        onclick: this.changeTitle
      }, 'Изменить')
    ])
  },
  beforeCreate() {
    console.log(`beforeCreate`)
  },
  created() {
    console.log(`created`)
  },
  beforeMount() {
    console.log(`beforeMount`)
  },
  mounted() {
    console.log(`mounted`)
  }
})

app.mount('#app')

Vue.createApp({
  data() {
    return {
      title: `Vue title 2`
    }
  }
}).mount('#app2')

