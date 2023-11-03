import useAuth from "@/modules/auth/composables/useAuth";

const mockStore ={
    dispatch: jest.fn(),
    getters:{
        'auth/currentState':'Authenticated',
        'auth/username':'Test User'
    },
    commit: jest.fn()
}

jest.mock('vuex',() => ({
    useStore: () => mockStore
}))


describe('Pruebas del composable', () => {

    beforeEach( ()=> jest.clearAllMocks()) 
    
    it('register User exitoso ', async() => {

        const {registerUser} = useAuth()
        mockStore.dispatch.mockReturnValue({ok:true})
        const newUser = { name:'Test User', email:'test@test.com', password:'654321'}

        const respons = await registerUser(newUser)

        expect(mockStore.dispatch).toBeCalledWith("auth/registerUser", newUser) 
        expect(respons).toEqual({"ok": true})
    });
    
    it('register User fallido, usario ya existe ', async() => {

        const {registerUser} = useAuth()
        mockStore.dispatch.mockReturnValue({ ok: false, message: 'EMAIL_EXISTS' })
        const user = { name:'Test User', email:'test@test.com', password:'654321'}

        const respons = await registerUser(user )

        expect(mockStore.dispatch).toBeCalledWith("auth/registerUser", user) 
        expect(respons).toEqual({ ok: false, message: 'EMAIL_EXISTS' })
    });
    
    it('signInUser User fallido, usario no existe', async() => {

        const {signInUser} = useAuth()
        mockStore.dispatch.mockReturnValue({ ok: false, message: 'EMAIL_NOT_FOUND' })
        const userForm = {  email:'test@test.com', password:'654321'}

        const respons = await signInUser(userForm)

        expect(mockStore.dispatch).toBeCalledWith("auth/signInUser", userForm) 
        expect(respons).toEqual({ ok: false, message: 'EMAIL_NOT_FOUND' })
    });
    
    it('signInUser User exitoso', async() => {

        const {signInUser} = useAuth()
        mockStore.dispatch.mockReturnValue({ ok: true })
        const userForm = { email:'test@test.com', password:'654321'}

        const respons = await signInUser(userForm)

        expect(mockStore.dispatch).toBeCalledWith("auth/signInUser", userForm) 
        expect(respons).toEqual({ ok: true })
    });
    
    it('Checkstatus exitoso', async() => {

        const {checkAuthentication} = useAuth()
        mockStore.dispatch.mockReturnValue({ ok: true })
        
        const respons = await checkAuthentication()

        expect(mockStore.dispatch).toBeCalledWith("auth/checkAuthentication") 
        expect(respons).toEqual({ ok: true })
    });


    it('logout User exitoso', async() => {

        const {logout} = useAuth()
        mockStore.dispatch.mockReturnValue({ ok: true })

        await logout()

        expect(mockStore.commit).toBeCalledWith("auth/logout")
        expect(mockStore.commit).toBeCalledWith("journal/cleareEntries") 
    });
    
    it('get authStatus', async() => {

        const {authStatus} = useAuth()

        expect(authStatus.value).toBe('Authenticated')
    });
    
    it('get username', async() => {

        const {username} = useAuth()

        expect(username.value).toBe('Test User')
    });
});