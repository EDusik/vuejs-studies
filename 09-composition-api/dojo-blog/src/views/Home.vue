<template>
  <h1>Home</h1>
  <p>My name is {{ name }} and my age is {{ age }} </p>
  <button @click="handleClick">click me</button>
</template>

<script>

export default {
  name: 'Home',
  setup() {
    const name = 'Eduardo'
    const age = 31

    const handleClick = () => {
      console.log('you clicked me')
    }

    return {
      name,
      age, 
      handleClick
    }
  }
}
</script>
