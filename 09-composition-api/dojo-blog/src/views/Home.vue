<template>
  <h1>Home</h1>
  <input type="text" v-model="search">
  <p>search term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  <!-- <p>My name is {{ name }} and my age is {{ age }} </p>
  <button @click="handleClick">click me</button>
  <button @click="age++">add one to age</button>
  <input type="text" v-model="name" />
  <br />
  <p>{{ninjaOne.name}} - {{ninjaOne.age}}</p>
  <button @click="updateNinjaOne">updateNinjaOne</button>
  <br />
  <h2>Reactive</h2>
  <p>{{ninjaTwo.name}} - {{ninjaTwo.age}}</p>
  <button @click="updateNinjaTwo">updateNinjaTwo</button> -->
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup() {

  // const p = ref(null);

  // const name = ref('Eduardo')
  // const age = ref(31)

  // const ninjaOne = ref({ name: 'edu', age: 30 })
  // const ninjaTwo = reactive({ name: 'dudu', age: 31})

  // const updateNinjaOne = () => {
  //   ninjaOne.value.age = 40;
  // }

  // const updateNinjaTwo = () => {
  //   ninjaTwo.age = 32;
  // }

  // const name = computed(() => {
  //   return 'Eduardo Dusik'
  // })

  const search = ref('')
  const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
  // const handleClick = () => {
  //   // console.log(p, p.value)
  //   // p.value.classList.add('test')
  //   // p.value.textContent = 'Hello, ninjas!'
  //   name.value = 'Eduardo Dusik'
  //   age.value = 32
  // }

  watch(search, () => {
    console.log(search)
  });

  const stopWatch = watch(() => {
    console.log('watch function ran', search.value)
  })

  watchEffect(() => {
    console.log('watch function ran', search.value)
  })

  const stopEffect = watchEffect(() => {
    console.log('watch function ran', search.value)
  })

  const matchingNames = computed(() => {
    // return ['a', 'b', 'c']
    return names.value.filter(name => name.includes(search.value))
  })

  const handleClick = () => {
    stopWatch()
    stopEffect()
  }

  return { names, search, matchingNames }

    // return {
    //   name,
    //   // age, 
    //   // handleClick,
    //   // ninjaOne,
    //   // updateNinjaOne,
    //   // ninjaTwo,
    //   // updateNinjaTwo
    // }
  }
}
</script>
