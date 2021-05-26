<template>
  <!-- <h1>{{ title }}</h1> -->
  <!-- <br />
  <input type="text" ref="name">
  <button @click="handleClick">click me</button> -->
  <p>Welcome...</p>
  <div v-if="showModal">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal" />   -->
    <Modal @close="toggleModal" theme="sale">
      <template v-slot:links>
        <a href="#">sign up now</a><br />
        <a href="#">more info</a>
      </template>
      <h1>Ninja Givaway</h1>
      <p>grab your ninja</p>
    </Modal>
  </div>

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Sign up to the newsletter</h1>
      <p>For updates and promo codes!</p>
    </Modal>
  </div>
  <button @click="toggleModal">show modal</button> 
  <button @click="toggleModalTwo">show modal 2</button> 
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
      text: "Grab the ninja",
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
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
