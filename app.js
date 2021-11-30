Vue.createApp({
  data: () => ({
    myHtml: '<h1>Vue 3</h1>',
    title: 'Я есть Гут',
    person: {
      firstName: 'Anton',
      lastName: 'Kondratev'
    },
    items: [1, 2]
  }),
  methods: {
    addItem () {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
    },
    remove (i) {
      this.items.splice(i, 1)
    },
    log (item) {
      console.log('log item: ', item)
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  }
}).mount('#app')
