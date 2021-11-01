<template>
    <h1 v-if="!pokemon">Espere por favor!!!</h1>
    <div v-else>
      <h1>¿Quien es este pokemon?</h1>
      <pokemon-picture 
        :pokemonId="pokemon.id" 
        :showPokemon="showPokemon"/>
      <pokemon-options 
        :pokemons="pokemonArr"
        @pokemonSelected="getPokemonSelected"/> <!-- igual a getPokemonSelected($event) donde event es el valor que envia $emit -->
    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonPotions'

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return{
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods:{
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor( Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    getPokemonSelected(selected){
      this.showPokemon = true
    }
  },
  mounted(){
    this.mixPokemonArr()
  }
}
</script>
