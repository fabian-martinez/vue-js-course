import authApi from "@/api/authApi";
import createVuexStore from "../../../../mock-data/mock-state";


describe('Vuex: pruebas en el auth module', () => {
    
    it('Estado inicial', () => {
        const store = createVuexStore( {
            status: 'authenticating', // 'authenticated', 'no-authenticated', 'authenticanting'
            user: null,
            idToken: null,
            refreshToken: null 
          } )
        const  { status, user, idToken, refreshToken } = store.state.auth
        
        expect( status ).toBe('authenticating')
        expect( user ).toBeNull
        expect( idToken ).toBeNull
        expect( refreshToken ).toBeNull
    });

    //Mutations

    it('Mutation - Log in', () => {
        const payload = { 
                user: { name:'Test User', email:'test@test.com'},
                idToken: 'TEST_IDTOKEN',
                refreshToken: 'REFRESH_TOKEN'
                 }
        const store = createVuexStore( {
            status: 'authenticating', // 'authenticated', 'no-authenticated', 'authenticanting'
            user: null,
            idToken: null,
            refreshToken: null 
          } )
        
        store.commit('auth/loginUser', payload)

        const  { status, user, idToken, refreshToken } = store.state.auth
        
        expect( status ).toBe('authenticated')
        expect( user ).toEqual( { name:'Test User', email:'test@test.com'} )
        expect( idToken ).toBe('TEST_IDTOKEN')
        expect( refreshToken ).toBe('REFRESH_TOKEN')

        expect( localStorage.getItem('idToken') ).toBe('TEST_IDTOKEN')
        expect( localStorage.getItem('refreshToken') ).toBe('REFRESH_TOKEN')
    });

    it('Mutation - log out', () => {
        const store = createVuexStore( {
            status: 'no-authenticated', // 'authenticated', 'no-authenticated', 'authenticanting'
            user: { name:'Test User', email:'test@test.com'},
            idToken: 'TEST_IDTOKEN',
            refreshToken: 'REFRESH_TOKEN'
          } )
        
        localStorage.setItem('idToken', 'TEST_IDTOKEN')
        localStorage.setItem('refreshToken', 'REFRESH_TOKEN')

        store.commit('auth/logout')

        const  { status, user, idToken, refreshToken } = store.state.auth
          
        expect( status ).toBe('no-authenticated')
        expect( user ).toBeNull
        expect( idToken ).toBeNull
        expect( refreshToken ).toBeNull

        expect( localStorage.getItem('idToken') ).toBeNull
        expect( localStorage.getItem('refreshToken') ).toBeNull

    });

    //Getters

    it('Getters - username y current state', () => {
        const store = createVuexStore( {
            status: 'authenticated', // 'authenticated', 'no-authenticated', 'authenticanting'
            user: { name:'Test User', email:'test@test.com'},
            idToken: 'TEST_IDTOKEN',
            refreshToken: 'REFRESH_TOKEN'
          } )
       
        expect(store.getters['auth/username']).toEqual('Test User')
        expect(store.getters['auth/currentState']).toEqual('authenticated')
    });

    //Actions 

    it('Actions: Register user - usuario ya existe', async () => {
      const store = createVuexStore( {
        status: 'no-authenticated', // 'authenticated', 'no-authenticated', 'authenticanting'
        user: null,
        idToken: null,
        refreshToken: null 
      } )
      const newUser = { name:'Test User', email:'test@test.com', password:'654321'}

      expect(await store.dispatch('auth/registerUser', newUser)).toEqual({ ok: false, message: 'EMAIL_EXISTS' })

      const  { status, user, idToken, refreshToken } = store.state.auth
      
      expect( status ).toBe('no-authenticated')
      expect( user ).toBeNull
      expect( idToken ).toBeNull
      expect( refreshToken ).toBeNull
    });

    it('Actions: Register user creado exitosamente', async () => {
      const store = createVuexStore( {
        status: 'no-authenticated', // 'authenticated', 'no-authenticated', 'authenticanting'
        user: null,
        idToken: null,
        refreshToken: null 
      } )
      
      const newUser = { name:'New Test User', email:'newUser@test.com', password:'654321'}
      
      
      expect(await store.dispatch('auth/registerUser', newUser)).toEqual({ ok: true })
  
      const  { status, user, idToken, refreshToken } = store.state.auth
      
      expect( status ).toBe('authenticated')
      expect( user ).toEqual(newUser)
      expect( typeof idToken ).toBe('string')
      expect( typeof refreshToken ).toBe('string')

      await authApi.post(':delete',{
        idToken
      })
    });
    
    it('Actions: Login - user registrado exitosamente', async () => {
      const store = createVuexStore( {
        status: 'no-authenticated', // 'authenticated', 'no-authenticated', 'authenticanting'
        user: null,
        idToken: null,
        refreshToken: null 
      } )
      
      const registeredUser = { name:'Test User', email:'test@test.com', password:'123456'}
      
      
      expect(await store.dispatch('auth/signInUser', registeredUser)).toEqual({ ok: true })
  
      const  { status, user, idToken, refreshToken } = store.state.auth
      
      expect( status ).toBe('authenticated')
      expect( user ).toEqual(registeredUser)
      expect( typeof idToken ).toBe('string')
      expect( typeof refreshToken ).toBe('string')

    });
    
    it('Actions: Check Authentication - Token valido', async () => {
      
      const { data: { idToken:testIdToken, 
                      refreshToken:testRefreshToken 
                    } } = await authApi.post(':signInWithPassword',  { 
          email:'test@test.com', 
          password: '123456', 
          returnSecureToken: true 
      })

      localStorage.setItem('idToken',testIdToken)
      localStorage.setItem('refreshToken',testRefreshToken)
      
      const testUser = { name:'test', email:'test@test.com'}

      const store = createVuexStore( {
        status: 'no-authenticated', // 'authenticated', 'no-authenticated', 'authenticanting'
        user:null,
        idToken:null,
        refreshToken:null 
      } )
      
      
      expect(await store.dispatch('auth/checkAuthentication')).toEqual({ ok: true })
  
      const  { status, user, idToken, refreshToken } = store.state.auth
      
      expect( status ).toBe('authenticated')
      expect( user ).toEqual(testUser)
      expect( typeof idToken ).toBe('string')
      expect( typeof refreshToken ).toBe('string')

    });
    
    it('Actions: Check Authentication - Token invalido', async () => {

      localStorage.setItem('idToken','INVALID_ID_TOKEN')
      localStorage.setItem('refreshToken','INVALID_REFRESH_TOKEN')
      
      const store = createVuexStore( {
        status: 'authenticated', // 'authenticated', 'no-authenticated', 'authenticanting'
        user:{ name:'test', email:'test@test.com'},
        idToken:'INVALID_ID_TOKEN',
        refreshToken:'INVALID_REFRESH_TOKEN' 
      } )
      
      expect(await store.dispatch('auth/checkAuthentication')).toEqual({ ok: false, message: "INVALID_ID_TOKEN" })
  
      const  { status, user, idToken, refreshToken } = store.state.auth
      
      expect( status ).toBe('no-authenticated')
      expect( user ).toBeNull
      expect( idToken ).toBeNull
      expect( refreshToken ).toBeNull

    });


    afterEach(() => {
      localStorage.removeItem('idToken')
      localStorage.removeItem('refreshToken')
    })

});