<template>
    <a v-if="isExternalLink" :href="link.to" target="_blank" class="normal-link">{{link.name}}</a>
    <!-- <router-link v-else :to="link.to" v-slot="{ href, isActive }">
        <a :href="href" :class=" isActive ? 'is-active' : 'normal-link'">{{link.name}}</a>
    </router-link> -->
    <router-link v-else :to="{ name: link.to, params:{ pokemonid:link.pokemonid } }" v-slot="{isActive }">
        <a :class=" isActive ? 'is-active' : 'normal-link'">{{link.name}}</a>
    </router-link>
</template>
<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        isExternalLink() {
             return this.link.to.startsWith('http')
        },route() {
            return this.link.id === undefined
            ? { name: this.link.to }
            : { name: this.link.to, data:{ pokemonid: this.link.pokermonid }}
        }
    }
}
</script>
<style scoped>
    .is-active {
        color: #42b983;
    }
    .normal-link {
        color: #c5c5c5;
    }
</style>