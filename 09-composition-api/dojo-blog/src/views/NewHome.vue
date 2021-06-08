<template>
  <h1>New Home</h1>
  <PostList v-if="showPosts" :posts="posts" />
  <button @click="showPosts = !showPosts">tottle posts</button>
  <button @click="posts.pop()">delete post</button>
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
    const showPosts = ref(true)

    return { posts, showPosts }
  }
}
</script>
