import { createStore } from 'vuex'
import { v4 as uuidv4} from 'uuid'

export default createStore({
  state: {
    todos: [
      { id:'1', text:'Reunir la gemas del infinito', completed:false },
      { id:'2', text:'Piedra del alma', completed:true },
      { id:'3', text:'Pidra del poder', completed:true },
      { id:'4', text:'Piedra de la mente', completed:false },
    ]
  },
  getters: {
    pendingTodos (state, getters, rootState ) {
      return state.todos.filter( todo =>  !todo.completed ) 
    },
    doneTodos (state, getters, rootState ) {
      return state.todos.filter( todo =>  todo.completed ) 
    },
    allTodos (state, getters, rootState ) {
      return state.todos 
    },
    getTodosByTab: (_, getters) => ( tab ) => {
       switch (tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.doneTodos 
       }
    }
  },
  mutations: {
    toggleTodo(state, id = '1'){
      const todoId = state.todos.findIndex( todo => todo.id === id )
      state.todos[todoId].completed = !state.todos[todoId].completed
    },
    createTodo(state, text=''){
      if ( text.length <= 1) return
      state.todos.push({
        id: uuidv4(),
        text,
        completed: false 
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
