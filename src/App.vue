<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>

      <button class="btn" @click="changeLang">{{ $i18n('app.changeBtn')}}</button>
      <button class="btn primary" @click="modal = true">открыть модалку</button>

      <teleport to="body">
        <app-modal v-if="modal" @close="modal = false"/>
      </teleport>
<!--      <button class="btn" @click="$alert('translatePlugin')">Alert</button>-->
    </div>
  </div>
</template>

<script>
import AppModal from './components/AppModal'

export default {
  inject: ['changeI18N'],
  data () {
    return {
      modal: false
    }
  },
  methods: {
    changeLang() {
      this.changeI18N('en')
      this.$forceUpdate()
    }
  },
  components: { AppModal }
}
</script>

