<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo</h1>

    <button class="btn btn-primary" @click="goToPlayBook">primary</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-success">success</button>
  </div>
</template>
 
<script>
export default {
  methods: {
    goToPlayBook() {
       this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>