const app = Vue.createApp({
    data() {
        return {
            message: 'Hola Mundo'
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola mundo')
            this.message = 'Hola Vue'
        }
    }
})

app.mount('#myApp')