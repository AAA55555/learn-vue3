<template>
  <div class="card card-w70">
    <template v-if="contentResume.length !== 0">
      <component
        v-for="content in contentResume"
        :key="content.id"
        :is="`resume-` + content.type"
        v-bind="{value: content.value}"
      />
    </template>
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import resumeTitle from './parts/ResumeTitle'
import resumeText from './parts/ResumeText'
import resumeAvatar from './parts/ResumeAvatar'
import resumeSubtitle from './parts/ResumeSubtitle'

export default {
  name: 'ResumeView',
  props: {
    contentResume: {
      type: Array,
      request: true
    }
  },
  components: { resumeTitle, resumeText, resumeAvatar, resumeSubtitle }
}
</script>
