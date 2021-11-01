<template>
    <h1 v-if="!pokemon">Espere por favor!!!</h1>
    <div v-else>
      <h1>¿Quien es este pokemon?</h1>
      <pokemon-picture 
        :pokemonId="pokemon.id" 
        :showPokemon="showResult"/>
      <pokemon-options 
        :pokemons="pokemonArr"
        @pokemonSelected="getAnswer"/>
      <template v-if="showResult">
        <h1 class="fade-in">{{result}}</h1>
        <button @click="newGame">Iniciar de nuevo</button>
      </template>
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
      showResult: false,
      result:''
    }
  },
  methods:{
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor( Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    getAnswer(idSelected){
      this.showResult = true
      if (idSelected === this.pokemon.id) {
        this.result = `Correcto, ${this.pokemon.name}`
      }else{
        this.result = `Error, era ${this.pokemon.name}`
      }
    },
    newGame(){
      this.pokemonArr = []
      this.showResult = false
      this.pokemon = null
      this.mixPokemonArr()

    }
  },
  mounted(){
    this.mixPokemonArr()
  }
}
</script>
