<template>
  <h1>New Home</h1>
  <PostList :posts="posts" />
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from 'vue'

export default {
  name: 'NewHome',
  components: { PostList },
  setup() {
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum', id: 1 },
      { title: 'top 5 CSS tips', body: 'Lorem ipsum', id: 2 }
    ])

    return { posts }
  }
}
</script>
