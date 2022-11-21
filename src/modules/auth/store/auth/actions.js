import authApi from "@/api/authApi"

export const registerUser = async ({commit}, user) => {
    const {name, email, password } = user
    try {
        const { data: { idToken, refreshToken } } = await authApi.post(':signUp',  { email, password, returnSecureToken: true })
        await authApi.post(':update', {idToken, displayName:name}) 
        
        commit('loginUser', { user, idToken, refreshToken  })
        
        return { ok: true } 
    } catch (error) {
        return{
            ok:false,
            message: error.response.data.error.message
        }
    }

}
export const signInUser = async ({commit}, user) => {
    const { email, password } = user
    
    try {
        const { data: { idToken, refreshToken, displayName } } = await authApi.post(':signInWithPassword',  { email, password, returnSecureToken: true })
        
        user.name = displayName

        commit('loginUser', { user, idToken, refreshToken  })
        
        return { ok: true } 
    } catch (error) {
        return{
            ok:false,
            message: error.response.data.error.message
        }
    }

}

export const checkAuthentication = async ({commit}) => {
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!idToken) {
        commit('logout')
        return {ok: false, message:'Token no existe'}
    }

    try {
        const { data } = await authApi.post(':lookup',  { idToken })
        const { email, displayName } = data.users[0]

        const user = {
            name: displayName,
            email
        }
        
        commit('loginUser', { user, idToken, refreshToken })
        return { ok: true }
        
    } catch (error) {
        commit('logout')
        return {
            ok:false,
            message: error?.response?.data?.error?.message 
        }
    }
}