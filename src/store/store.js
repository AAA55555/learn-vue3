import {createStore} from 'vuex'
import axios from 'axios'

export const store = createStore({
  state() {
    return {
      tasks: []
    }
  },
  mutations: {
    addTasks(state, tasks) {
      state.tasks = tasks
    },
    saveStatus(state, task) {
      let id = state.tasks.findIndex(el => el.id === task.id)

      state.tasks[id] = task
    }
  },
  actions: {
    async postTask({commit, dispatch}, task) {
      try {
        await axios.post('https://vue-freelance-9a762-default-rtdb.firebaseio.com/tasks.json', task)
        dispatch('getTask')
      } catch (e) {
        console.error(e.message)
      }
    },
    async getTask({commit}) {
      try {
        let {data} = await axios.get('https://vue-freelance-9a762-default-rtdb.firebaseio.com/tasks.json')
        let res = Object.keys(data).map(key => {
          return {
            id: key,
            name: data[key].name,
            deadline: data[key].deadline,
            description: data[key].description,
            status: data[key].status
          }
        })
        commit('addTasks', res)
      } catch (e) {
        console.error(e.message)
      }
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    getTaskById: (getters) => (id) => {
      return getters.tasks.find(t => t.id === id)
    }
  }
})
