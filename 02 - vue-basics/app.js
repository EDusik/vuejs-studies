const app = Vue.createApp({
  // data, functions, templates
  // template: '<h2>I am the template</h2>'
  data() {
    return {
      showBooks: true,
      title: 'The final empire',
      author: 'Brandon Sanderson',
      age: 45,
      x: 0,
      y: 0
    }
  },
  methods: {
    changeTitle () {
      this.title = "Change title 2"
    },
    changeTitleWithParams(title) {
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(event, data) {
      console.log(event, event.type)
      if (data) {
        console.log(data)
      }
    },
    handleMouseMove(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    }
  }
})

app.mount('#app')
