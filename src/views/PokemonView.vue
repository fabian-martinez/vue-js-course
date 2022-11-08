<template>
  <h1>Pokemon View</h1>
  <h2 v-if="!pokemon && !errorMessage">Is Loading...</h2>
  <h5 v-else-if="errorMessage">{{errorMessage}}</h5>

  <template v-else>
    <div>
      <h2>Nombre del Pokemon: {{pokemon.name}}</h2>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
    <br>
  </template>
  <router-link :to="{ name: 'pokemon-search' }">Regresar a la busqueda</router-link>

</template>

<script>
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import usePokemon from '@/composables/usePokemon'
import { watch } from 'vue';
export default {
    setup() {

        const route = useRoute()
        const{
          pokemon,
          isLoading,
          errorMessage,
          searchPokemon
        } = usePokemon(route.params.id)

        watch(
          () => route.params.id,
          () => searchPokemon(route.params.id)
          // ( value, prevValue ) => {
          //   
          // }
        )

        onBeforeRouteLeave(() => {
          const answer = window.confirm('Esta seguro que desea salir?')
          if( !answer ) return false //Bloquea la salida
        })

        return{
          pokemon,
          isLoading,
          errorMessage,
          searchPokemon
        }
    }
}
</script>

<style>

</style>