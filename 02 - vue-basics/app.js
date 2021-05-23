const app = Vue.createApp({
  // data, functions, templates
  // template: '<h2>I am the template</h2>'
  data() {
    return {
      title: 'The final empire',
      author: 'Brandon Sanderson',
      age: 45
    }
  },
  methods: {
    changeTitle () {
      this.title = "Change title 2"
    },
    changeTitleWithParams(title) {
      this.title = title
    }
  }
})

app.mount('#app')
