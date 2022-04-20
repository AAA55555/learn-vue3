<template>
  <form
      @submit.prevent="submit"
      class="card"
  >
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="name">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button
        class="btn primary"
        :disabled="!isDisabledBtn"
    >
      Создать
    </button>
  </form>
</template>


<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const name = ref('')
    const deadline = ref('')
    const description = ref('')
    const store = useStore()
    const router = useRouter()

    const isDisabledBtn = computed(() => {
      store.dispatch('getTask')
      return name.value !== '' && deadline.value !== '' && description.value !== ''
    })

    const submit = () => {
      store.dispatch('postTask', {
        name: name.value,
        deadline: deadline.value,
        description: description.value,
        status: 'active'
      })

      name.value = ''
      deadline.value = ''
      description.value = ''

      router.push('/')
    }

    return {
      name: name,
      date: deadline,
      description: description,
      isDisabledBtn,
      submit
    }
  }
}
</script>
