<template>
  <h1>Real-time data</h1>
  <div v-for="post in posts" :key="post.id">
    {{post.title}}
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config'
import { ref } from 'vue'

export default {
  setup() {
    const posts = ref([])

    projectFirestore.collection('posts')
    .orderBy('createdAt', 'desc')
    .onSnapshot((snap) => {
      const docs = snap.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
      posts.value = docs
    })

    return { posts }
  }
}
</script>

<style>

</style>
