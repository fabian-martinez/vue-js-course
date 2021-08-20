import axios from "axios";

const apiKey = 'D7vn5alDyoPB5Ng6F45Qjz0J5Gy5qntI'
//request de ejemplo:
//      https://api.giphy.com/v1/gifs/random?api_key=D7vn5alDyoPB5Ng6F45Qjz0J5Gy5qntI

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

// giphyApi.get('/random')
//     .then( (response) => {

//         const { data } = response.data
//         const { url } = data.images.original
        
//         const img = document.createElement('img')
//         img.src = url
//         document.body.append( img )
//     } )