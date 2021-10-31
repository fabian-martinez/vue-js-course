<template>
    <h1>¿Quien es este pokemon?</h1>
    <pokemon-picture :pokemonId="6" :showPokemon="true"/>
    <pokemon-options :pokemons="pokemonArr"/>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonPotions'

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return{
      pokemonArr: []
    }
  },
  methods:{
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions()
    }
  },
  mounted(){
    this.mixPokemonArr()
  }
}
</script>
