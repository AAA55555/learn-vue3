<template>
  <div class="card" v-if="task">
    <h2>Название задачи</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="task.status"/>
    </p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.deadline).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="setStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="setStatus('done')">Завершить</button>
      <button class="btn danger" @click="setStatus('cancelled')">Отменить</button>
      <button class="btn back" @click="$router.push('/')">Назад</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>Tут {{ id }}</strong> нет.
  </h3>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import AppStatus from '../components/AppStatus.vue'

export default {
  setup() {
    const store = useStore()
    const router = useRoute()

    const id = router.params.id
    const task = computed(() => store.getters.getTaskById(id))

    const setStatus = status => {
      const obj = {...task.value, status}
      store.commit('saveStatus', obj)
    }

    return {
      task,
      id,
      setStatus
    }
  },
  components: {AppStatus}
}
</script>

<style lang="scss" scoped>
.back {
  background: rgb(211 202 168 / 16%);
  color: #524c4c;
  border-color: #9d9595;
}
</style>
