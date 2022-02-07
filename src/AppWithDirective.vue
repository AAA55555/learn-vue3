<template>
  <div class="container">
    <div class="card" v-if="show">
      <h2 v-color:[type].blink.hover="myColor">Разговор про директивы</h2>

      <div class="form-control">
        <label>
          Активный по умолчанию
          <input v-focus type="text" id="inp">
        </label>
      </div>

      <button class="btn" @click="myColor = 'blue'">Сделать синим!</button>
      <button class="btn" @click="type = type === 'color' ? 'backgroundColor' : 'color'">Переключить тип</button>
    </div>
  </div>
</template>

<script>
import focusDirective from './focusDirective'
import colorDirective from './colorDirective'

export default {
  data () {
    return {
      myColor: 'red',
      type: 'color',
      show: true
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.show = false
    // }, 3000)
  },
  directives: {
    focus: focusDirective,
    color: colorDirective
  }
}
</script>

