<template>
  <h1>Home</h1>
  <p ref="p">My name is {{ name }} and my age is {{ age }} </p>
  <button @click="handleClick">click me</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {

    const p = ref(null);

    const name = 'Eduardo'
    const age = 31

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'Hello, ninjas!'
    }

    return {
      name,
      age, 
      handleClick, 
      p
    }
  }
}
</script>
