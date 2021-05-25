<template>
  <!-- <h1>{{ title }}</h1> -->
  <!-- <br />
  <input type="text" ref="name">
  <button @click="handleClick">click me</button> -->
  <Modal :header="header" :text="text" theme="sale" />
</template>

<script>
import Modal from "./components/Modal"

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: "My first Vue App :)",
      header: "Sign up for the Giveway!",
      text: "Grab the ninja"
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    } 
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1 {
    border-bottom: 1px solid #DDD;
    display: inline-block;
    padding-bottom: 1rem;
  }

  .modal.sale {
    background:crimson;
    color: #FFF;
  }

  .modal.sale h1 {
    color: #FFF;
  }
</style>
