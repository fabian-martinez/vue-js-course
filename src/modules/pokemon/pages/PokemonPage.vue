<template>
    <div>
        <h1>Pokemon Page <span>No. {{ pokemonid }}</span></h1>
        <div v-if="pokemon">
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name" srcset="">
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            pokemonid:{
                type: Number,
                required: true
            },
        }, 
        data() {
            return{
                pokemon: null,
            }
        },
        created() { 
            //const { pokemonid } = this.$route.params;
            this.getPokemon()
        },
        methods: {
            async getPokemon() {
                try {
                    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.pokemonid }`  ).then( response => response.json() )
                    console.log(pokemon);
                    this.pokemon = pokemon 
                } catch (error) {
                     this.$router.push('/')
                }
            }
        },
        watch: {
             pokemonid() {
                this.getPokemon()
             }
        }
    }
</script>