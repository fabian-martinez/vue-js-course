<template lang="">
    <div>
        <h1>Counter View</h1>
        <h2>{{ counter }}</h2>
        <hr>
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    // Propiedades que se mantienen para compisition API 
    // Estas propiedades basicas para enteneder el funcionamiento del componente
    name:'counter',
    props:{},
    emits:[],
    // setup() es el elemento centrar del composition API 
    // Todo lo requerido para el funcionamiento del componente va dentro del setup()
    // el setup se ejecuta antes de que se construya el componente
    setup(){

        const counter = ref(10) 

        // Normalmente no se crea una funcion a menos de que se requiera dentro del setup
        // const increase = () => {
        //     counter.value++
        // }
        // const decrease = () => {
        //     counter.value--
        // }

        return {
            //Objects
            counter,

            //Methods
            increase: () => counter.value++,
            decrease: () => counter.value-- 
        }
    }

    
}
</script>
<style lang="">
    
</style>