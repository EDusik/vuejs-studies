<template>
  <h1>Home</h1>
  <p>My name is {{ name }} and my age is {{ age }} </p>
  <button @click="handleClick">click me</button>
  <button @click="age++">add one to age</button>
  <input type="text" v-model="name" />
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {

    // const p = ref(null);

    const name = ref('Eduardo')
    const age = ref(31)

    const handleClick = () => {
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = 'Hello, ninjas!'
      name.value = 'Eduardo Dusik'
      age.value = 32
    }

    return {
      name,
      age, 
      handleClick,
    }
  }
}
</script>
