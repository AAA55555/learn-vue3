import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      counter: 1
    }
  },
  // чтобы изменять state, но только синхронно работает
  mutations: {
    increment(state) {
      state.counter++
    },
    add(state, payload) {
      state.counter += payload.value
    }
  },
  // используется для асинхронных функций setTimout
  actions: {
    incrementAsync(context, {value, delay}) {
      // console.log(context)
      setTimeout(() => {
        context.commit({
          type: 'add',
          value
        })
      }, delay)
    }
  },
  // чтобы выводить что то в шаблон и не изменять сам state
  getters: {
    counter(state) {
      if (state.counter > 20) {
        return state.counter * 1.1
      }
      return state.counter
    },
    doubleCounter(state, getters) {
      return getters.counter * 2
    }
  }
})
