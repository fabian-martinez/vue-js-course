<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>reactive vs ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronMan">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>

    <h3>Ironman is alive:{{ironmanIsAlive}}</h3>
    <h3>Hulk is alive:{{hulkIsAlive}}</h3>

    <button @click="changeStatus">Cambiar Estatus</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { reactive, ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const ironman = ref({name:'Tony', age:50})
    const hulk = reactive({name:'Bruse', age:50})

    let ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeIronMan = () => {
      ironman.value.name = 'Tony Stark'
    }
    const changeHulk = () => {
      hulk.name = 'Bruse Banner'
    }

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
      ironmanIsAlive = !ironmanIsAlive
    }

    return{
      ironman, hulk, ironmanIsAlive, hulkIsAlive, changeIronMan, changeHulk, changeStatus
    }
  }
}
</script>
