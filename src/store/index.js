import { createStore } from 'vuex'
import counterStorage from './counter'

export default createStore({
    modules: {
        counter: counterStorage
    }
})