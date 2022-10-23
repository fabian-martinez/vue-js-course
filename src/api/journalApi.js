
import axios from 'axios' 

const journalApi = axios.create({
    baseURL: 'https://vue-demi-dfe58-default-rtdb.firebaseio.com'
})

export default journalApi