import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const useTodoList = () => {

    const store = useStore()

    const currentTab = ref('all')

    return{
        currentTab,
        pending: computed(() => store.getters['pendingTodos']),
        all: computed(() => store.getters['allTodos']),  
        completed: computed(() => store.getters['doneTodos']),
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
        toggleTodo: (id) => store.commit('toggleTodo',id),
        createTodo: (text) => store.commit('createTodo',text)
    }
}

export default useTodoList