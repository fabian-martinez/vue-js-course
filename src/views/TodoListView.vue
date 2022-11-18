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
    <modal v-if="isOpen" @on:close="close" >
        <template v-slot:header>
            <h2>Crear nueva tarea</h2>
        </template>
        <template v-slot:body>
            <form @submit.prevent="onSubmit">
                <input 
                type="text" 
                name="text" 
                placeholder="Tarea"  
                v-model="taskToCreate"
                @submit.prevent="onSubmit"
                >
                <hr><hr>
                <button type="submit">Crear tarea</button>
            </form>
        </template>
    <template v-slot:exposed="{newTitle}">
      <h2>{{newTitle}}</h2>
    </template> 
    </modal>
    <button @click="open">Crear Todo</button>
</template>

<script>
import useTodoList from '@/composables/useTodoList'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {
    components:{Modal},
    setup() {

        const {currentTab, pending, all, completed, getTodosByTab, toggleTodo, createTodo} = useTodoList()
        const isOpen = ref(false)
        const taskToCreate = ref('')
        
        return{
            currentTab,
            pending,
            all,
            completed,
            getTodosByTab,
            toggleTodo,
            isOpen,
            taskToCreate,
            onSubmit: () => {
                createTodo(taskToCreate.value)
                taskToCreate.value=''
                isOpen.value=false
            },
            open:() => {
                isOpen.value=true
            },
            close:() => isOpen.value=false
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