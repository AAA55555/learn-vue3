<template>
<!--  <app-alert-->
<!--      v-if="alert"-->
<!--      title="Работаем с Composition"-->
<!--      type="danger"-->
<!--      @close="close"-->
<!--  />-->
  <div class="card">
    <h1>Vue Composition Api</h1>
    <small>data, methods, computed, watch</small>
    <hr>

    <div class="form-control">
      <!--        <input type="text" ref="textInput">-->
      <input type="text" v-model="firstName">
    </div>

    <button class="btn" @click="change">Изменить</button>
  </div>
  <FrameworkInfo @change-version="changeVersion"/>
</template>

<script>
import FrameworkInfo from '../FrameworkInfo'
import { ref,
  reactive,
  toRefs,
  computed,
  watch,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmunted
} from 'vue'
export default {
  name: "HomePage",
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')

    const framevork = reactive({
      name: 'VueJS',
      version: 3
    })

    console.log('created')

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    // watch(doubleVersion, (newValue, oldValue) => {
    //   console.log('old', oldValue)
    //   console.log('new', newValue)
    // })

    function changeInfo() {
      name.value = 'Vue JS !'
      version.value = 42
    }

    function changeVersion(num) {
      version.value = num
    }

    provide('name', name)
    provide('version', version)

    return {
      change: changeInfo,
      changeVersion,
      firstName
    }
  },
  components: {FrameworkInfo}
}
</script>

<style scoped>

</style>
