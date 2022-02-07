<template>
  <div class="container">
    <app-alert
        v-if="alert"
        text="Это очень важное сообщение"
        title="Внимание!"
        type="primary"
        @close="alert = false"
    />
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть' : 'Показать'}} сообщение</button>
    </div>
  </div>
</template>

<script>
import AppAlert from './AppAlert'
import alertMixin from '../alertMixin'

export default {
  name: 'App',
  mixins: [alertMixin],
  components: {AppAlert}
}
</script>

