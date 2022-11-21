
import axios from 'axios' 

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyBw9YrBMvF4vaLgSbIMU_K9itIrHrOGlZ4'
    }
})

export default authApi