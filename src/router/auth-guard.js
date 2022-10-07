const isAuthenticated = () => {
    return new Promise( (resolve) => {

        const randomLogin = Math.random() * 100
        if ( randomLogin > 50) {
            console.log(randomLogin, 'autenticado')
            resolve(true)
        } else {
            console.log(randomLogin, 'Bloqueado por el BeforeEach Guard')
            resolve(false)
        }
    })
}

export default isAuthenticated