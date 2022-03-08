<template>
  <app-alert
      v-if="alert"
      title="Работаем с Composition"
      type="primary"
      @close="close"
  />
  <div class="card">
    <h1>Переиспользование</h1>

    <button class="btn primary" @click="toggle">{{alert ? 'Закрыть' : 'Показать'}} сообщение</button>
    <button class="btn" @click="navigate">Перейти на главную</button>
  </div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
import AppAlert from '../AppAlert'
import {reactive} from 'vue'
import {useAlert} from '../use/alert'

export default {
  name: "ReusablePage",
  setup() {
    // const alert = reactive({
    //   type: 'warning',
    //   title: 'Reactive Alert'
    // })
    // const {alert, close, toggle} = useAlert()
    // const [simpleAlert, toggle, close] = useAlert()

    const router = useRouter()
    const route = useRoute()

    const navigate = () => {
      router.push('/')
    }

    // return {
    //   alert,
    //   navigate,
    //   toggle,
    //   close
    // }
    return {
      navigate,
      ...useAlert()
    }
  },
  components: {AppAlert}
}
</script>

<style scoped>

</style>
