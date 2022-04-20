<template>
  <h1
      v-if="tasks.length === 0"
      class="text-white center"
  >
    Задач пока нет
  </h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ tasks.length }}</h3>
    <div
        class="card"
        v-for="task in tasks"
        :key="task.id"
    >
      <h2 class="card-title">
        {{ task.name }}
        <AppStatus :type="checkDate(task.deadline, task.status)"/>
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date(task.deadline).toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <button
          class="btn primary"
          @click="open(task.id)"
      >
        Посмотреть
      </button>
    </div>
  </template>
</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import AppStatus from '../components/AppStatus.vue'

export default {
  setup() {
    let isShowTasks = ref(true)
    const store = useStore()
    const router = useRouter()

    let tasks = computed(() => {
      return store.getters.tasks
    })

    const open = (id) => {
      router.push(`/task/${id}`)
    }

    const checkDate = (date, status) => {
      if (new Date(date) > new Date()) {
        return status
      } else {
        return 'cancelled'
      }
    }

    return {
      isShowTasks,
      tasks,
      open,
      checkDate
    }
  },
  components: {AppStatus}
}
</script>
