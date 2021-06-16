<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import Spinner from "../components/Spinner.vue";
import getPosts from "../composables/getPosts";

import { computed } from 'vue'

import { useRoute } from "vue-router";

export default {
  props: ["tags"],
  components: { Spinner, PostList, TagCloud },
  setup(props) {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const filteredPosts  = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tags))
    })

    return { error, posts, filteredPosts };
  },
};
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }

  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>