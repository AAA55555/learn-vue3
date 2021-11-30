const App = {
  data() {
    return {
      inputTask: '',
      arrTasks: []
    }
  },
  methods: {
    addTask () {
      if (this.inputTask > 0) {
        this.arrTasks.push(this.inputTask)
        this.inputTask = ''
      }
    },
    removeTask (index) {
      this.arrTasks.splice(index, 1)
    }
  },
  computed: {
    colorText () {
      return this.inputTask.length === 0
    }
  }
}

Vue.createApp(App).mount('#app')
