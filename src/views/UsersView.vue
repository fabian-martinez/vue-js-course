<template lang="">
    <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    
    <div v-if="users.length > 0">
        <user-list 
          :users="users"
          v-slot="{user}">
            <h1>{{user.first_name}} {{user.last_name}}</h1>
            <span>{{user.email }}</span>
        </user-list>
    </div>
    
    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    
    <span> Pagina: {{currentPage}}</span>

    <h5 v-if="errorMessage">{{errorMessage}}</h5>
</template>
<script> 
import useUsers from '@/composables/useUsers'
import UserList from '@/components/UserList'
export default {
    components:{UserList},
    setup() {
        const {
            users,
            isLoading,
            currentPage,
            errorMessage,
            
            nextPage,
            prevPage
        } = useUsers()

        return{
            users,
            isLoading,
            currentPage,
            errorMessage,

            nextPage,
            prevPage
        }
    }
}
</script>
<style lang="css" scoped>
h2 {
    text-align: center;
    width: 100%;
}
div {
    display: flex;
    justify-content: center;
    text-align: center;
}
ul {
    width: 250px;
}
</style>