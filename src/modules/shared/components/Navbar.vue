<template lang="">
    <div>
        <!-- <router-link to="/">Pokemon List</router-link>
        <router-link to="/about">About</router-link>
        <router-link :to="{ name:'pokemon-id', params:{ pokemonid:30 }}">Pokemon</router-link> -->
        <custom-link v-for="link in links" :key="link.to" :link="link"></custom-link>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    data() {
        return {
            links: [
                { to: 'pokemon-home', name: 'Pokemons'},
                { to: 'pokemon-id', name: 'PokemonPorID', pokemonid:40},
                { to: 'pokemon-about', name: 'Pokemon About'},
                { to: 'dbz-characters', name: 'DBZ Personajes'},
                { to: 'dbz-about', name: 'DBZ About'},
                { to: 'https://google.com', name: 'Google '},
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink'))
    }
}
</script>
<style scoped>
    div {
        padding: 0 30px;
    }
    div a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }
    /* a.router-link-exact-active {
        color: #42b983;
    }  */
</style>