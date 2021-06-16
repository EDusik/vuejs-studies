<template>
  <div class="tag">
    <h1>Tags: {{ tags }}</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="filteredPosts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import Spinner from "../components/Spinner.vue";
import getPosts from "../composables/getPosts";

import { computed } from 'vue'

import { useRoute } from "vue-router";

export default {
  props: ["tags"],
  components: { Spinner, PostList },
  setup(props) {
    const route = useRoute();
    const tags = route.params.tags;

    const { posts, error, load } = getPosts();

    load();

    const filteredPosts  = computed(() => {
      return posts.value.filter((post) => post.tags.includes(tags))
    })

    return { error, tags, posts, filteredPosts };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>