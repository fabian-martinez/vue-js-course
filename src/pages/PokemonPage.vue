<template>
    <h1>¿Quien es este pokemon?</h1>
    <pokemon-picture :pokemonId="6" :showPokemon="true"/>
    <pokemon-options/>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonPotions'

getPokemonOptions().then((result) => {
  console.table(result);
}).catch((err) => {
  console.log(err);
});

export default {
  components: { PokemonPicture, PokemonOptions },

}
</script>
