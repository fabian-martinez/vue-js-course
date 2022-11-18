<template>
   <h1>Lista de tarea de Thanos </h1>
   <h4>Pendientes: {{ pending.length  }}</h4>

   <hr>
    <button @click="currentTab='all'"       :class="{ 'active':currentTab==='all' }"      >Todos</button>
    <button @click="currentTab='pending'"   :class="{ 'active':currentTab==='pending' }"  >Pendientes</button>
    <button @click="currentTab='completed'" :class="{ 'active':currentTab==='completed' }">Completados</button>
    
    <div>
        <ul>
            <li @dblclick="toggleTodo(id)" v-for="{id, text, completed} in getTodosByTab" :key="id" :class="{ 'competed':completed }"> {{text}}</li>
        </ul>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        const currentTab = ref('all')
        

        return{
            currentTab,
            pending: computed(() => store.getters['pendingTodos']),
            all: computed(() => store.getters['allTodos']),  
            completed: computed(() => store.getters['doneTodos']),
            getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
            toggleTodo: (id) => store.commit('toggleTodo',id)
        }
    }

}
</script>

<style scoped>
div{
    display: flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 300px;
    text-align: left;
}
li{
    cursor: pointer;
}
.active{
    background-color: #2e3c50;
    color: white;
}
.competed{
    text-decoration: line-through;
}
</style>