<template>
  <h1>Buscar Pokemon {{pokemonId}}</h1>
  <form @submit.prevent="onSubmit">
  <!-- <form> -->
    <input 
        type="number" 
        name="pokemon-id" 
        placeholder="Numero de pokemon"
        v-model="pokemonId"
        ref="txtSearchID"
    >
  </form>
  <br>
  <span>Precione Enter para continuar </span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'


export default {
    setup() {

        const router = useRouter()

        const pokemonId = ref(1)
        const txtSearchID = ref()

        onActivated(() => {
            console.log(txtSearchID.value);
            txtSearchID.value.select()
        })

        return{
            pokemonId,
            txtSearchID,
            onSubmit: () => {
                // cannot access to this. from setup()
                // console.log('pokemon a buscar', pokemonId.value);
                router.push({ name:'pokemon-id', params: { id: pokemonId.value }})
            }
        }
    }
}
</script>

<style>

</style>