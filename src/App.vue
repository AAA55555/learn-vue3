<template>
  <app-modal v-if="isModal" :content="contentModal" @close="isModal = false"/>
  <div class="container column">
    <resume-form @content-resume="addContent"/>
    <resume-view :content-resume="contentResume"/>
  </div>
  <div class="container">
    <button
      v-if="!comments.length"
      @click.prevent="uploadComment"
      :disabled="!contentResume.length"
      class="btn primary"
    >Загрузить комментарии</button>
    <div class="card" v-else>
      <h2>Комментарии</h2>
      <ul
        class="list"
        v-for="{ email, id, body } in comments"
        :key="id"
      >
        <li class="list-item">
          <div>
            <p><strong>{{ email }}</strong></p>
            <small>{{ body }}</small>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="loader"
      v-if="isLoader"
    ></div>
  </div>
</template>

<script>
import ResumeForm from './components/ResumeForm'
import ResumeView from './components/ResumeView'
import axios from 'axios'
import AppModal from './components/base-components/AppModal'

export default {
  data () {
    return {
      contentResume: [],
      isLoader: false,
      comments: [],
      isModal: false,
      contentModal: {}
    }
  },
  provide () {
    return {
      selects: [
        { value: 'title', text: 'Заголовок' },
        { value: 'subtitle', text: 'Подзаголовок' },
        { value: 'avatar', text: 'Аватар' },
        { value: 'text', text: 'Текст' }
      ]
    }
  },
  components: { ResumeForm, ResumeView, AppModal },
  methods: {
    addContent (content) {
      this.contentResume.push(content)
    },
    async uploadComment () {
      this.isLoader = true
      try {
        const response = await axios('https://jsonplaceholder.typicode.com/comments?_limit=42')
        if (response.status === 200) {
          this.comments.push(...response.data)
          this.isLoader = false
          this.contentModal = {
            title: 'Успешно',
            text: 'Запрос прошел успешно!!!'
          }
          this.isModal = true
        }
      } catch (e) {
        this.contentModal = {
          text: `Произошла ошибка!!! ${e.message}`
        }
        this.isModal = true
        this.isLoader = false
      }
    }
  }

}
</script>
