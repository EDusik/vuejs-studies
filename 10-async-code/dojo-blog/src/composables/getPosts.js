import { ref } from 'vue'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const data = await fetch('http://localhost:3000/posts')
      if (!data.ok) {
        throw new Error('no data available')
      }

      posts.value = await data.json();
    }
    catch (err) {
      error.value = err.message
    }
  }

  return { posts, error, load } 
}

export default getPosts
