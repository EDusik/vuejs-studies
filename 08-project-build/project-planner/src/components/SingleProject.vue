<template>
  <div class="project">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{project.title}}</h3>
      <div class="icons">
        <span @click="editProject" class="material-icons">edit</span>
        <span @click="deletetProject" class="material-icons">delete</span>
        <span @click="completeProject" class="material-icons">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{project.details}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return{
      showDetails: false,
      uri: `http://localhost:3000/projects/${this.project.id}`
    }
  },
  methods: {
    deletetProject() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.project.id))
        .catch(err => console.log(err));
    }
  }
}
</script>

<style>
  .project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
  }

  h3 {
    cursor: pointer;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-icons:hover {
    color: #777;
  }
</style>