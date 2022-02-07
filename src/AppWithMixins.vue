<template>
  <div class="container">
    <app-alert
        v-if="alert"
        text="Это очень важное сообщение"
        title="Внимание!"
        type="warning"
        :closable="true"
        @close="alert = false"
    />
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть' : 'Показать'}} сообщение</button>
    </div>

    <app-block/>
  </div>
</template>

<script>
import AppAlert from './components/AppAlert'
import AppBlock from './components/AppBlock'
import alertMixin from './alertMixin'

export default {
  name: 'App',
  mixins: [alertMixin],
  components: {AppAlert, AppBlock}
}
</script>

