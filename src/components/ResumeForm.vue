<template>
  <form class="card card-w30" @submit.prevent="contentRecording">
    <h4>Тип блока</h4>
    <div class="form-control">
      <select id="type" v-model="valueSelect">
        <option
          :value="item.value"
          v-for="item in selects"
          :key="item"
        >
          {{ item.text }}
        </option>
      </select>
    </div>
    <div class="form-control">
      <label for="value">Значение</label>
      <textarea
        id="value"
        rows="3"
        v-model="valueTextarea"
      ></textarea>
    </div>
    <app-btn
      :is-disabled="valueTextarea.length<=3"
      value="Добавить"
    />
  </form>
</template>

<script>
import AppBtn from './base-components/AppBtn'

export default {
  name: 'ResumeForm',
  inject: ['selects'],
  provide () {
    return {
      currentValueSelect: this.valueSelect
    }
  },
  data () {
    return {
      valueTextarea: '',
      valueSelect: this.selects[0].value
    }
  },
  emits: ['contentResume'],
  components: {
    AppBtn
  },
  methods: {
    contentRecording () {
      this.$emit('contentResume', {
        type: this.valueSelect,
        value: this.valueTextarea,
        id: Date.now()
      })

      this.valueTextarea = ''
      this.valueSelect = this.selects[0].value
    }
  }
}
</script>
