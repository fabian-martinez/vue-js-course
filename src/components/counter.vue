<template lang="">
    <div>
        <h1>Counter - Vuex</h1>
        <!-- <h2>Direct Access:  {{ $store.state.count }}</h2> -->
        <h2>Direct Access fron module:  {{ $store.state.counter.count }}</h2>
        <h2>Computed:{{ countComputed }}</h2>
        <button @click="increment">Increment +1</button>
        <button @click="incrementByFive">Increment +5</button>
        <!-- <button @click="incrementByRandom ">Increment random</button> -->
        <button @click="incrementRandom" :disabled="isLoading">Increment random</button>
        <!-- ### v-bind: => : -->
        <!-- <button @click="ranromInt" :disabled="isLoading">Increment random</button> -->
        <h2>Ultimo valor sumado: {{ lastValue }}</h2>
        <h1>Map State</h1>
        <h2>mapStat4: {{count}}</h2>
        <h2>LastMutation: {{ lastMutation }}</h2>
        <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
        <!-- <h2>Direct getter: {{ square() }}</h2> -->
    </div>
</template>
<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    computed: { 
        countComputed(){
            // return this.$store.state.count
            return this.$store.state.counter.count //from a module
        },
        // ...mapState(['count', 'lastMutation', 'lastValue', 'isLoading']),
        ...mapState('counter', ['count', 'lastMutation', 'lastValue', 'isLoading']), // desde un modulo
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation 
        // })
    },
    methods: {
        increment(){
            // this.$store.commit('increment') 
            this.$store.commit('counter/increment') // llamadado desde un modulo
        },
        incrementByFive(){
            this.$store.commit('counter/incrementByAValue', 5)
            // this.randomInt()
            // La action se puede llamar en las operaciones despues de definida en el mapAction
        },
        // incrementByRandom(){
        //     this.$store.dispatch( 'incrementRandom' ) //Forma de llamar a las action
        // }
        // ...mapActions( ['incrementRandom'] )
        ...mapActions( 'counter', ['incrementRandom'] ), // llamado desde el modulo
        // ...mapActions( { ranromInt: 'incrementRandom' } )
        // ...mapGetters( 'counter', { square: 'squareCount'} ),
    } 
}
</script>
<style lang="">
    
</style>