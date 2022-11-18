<template>
    <ul>
        <slot 
          v-for="user in users" 
          :key="user.id"
          :user="user">
        </slot>
    </ul>
</template>

<script>
export default {
    props:{
        users:{
            require: true,
            typeof: Array
    }},
    setup() {
        
    }
}
</script>

<style>

</style>