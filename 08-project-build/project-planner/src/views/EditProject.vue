<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input v-model="title" type="text" required />
    <label>Details:</label>
    <textarea v-model="details" type="text"></textarea>
    <button>Edit Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/projects/'
    }
  },
  mounted() {
    fetch(`${this.uri}${this.id}`)
      .then(res => res.json())
      .then(data => {
        this.title = data.title,
        this.details = data.details
      })
  }
}
</script>

<style>

</style>