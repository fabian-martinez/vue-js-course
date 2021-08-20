
const apiKey = 'D7vn5alDyoPB5Ng6F45Qjz0J5Gy5qntI'
//request de ejemplo:
//      https://api.giphy.com/v1/gifs/random?api_key=D7vn5alDyoPB5Ng6F45Qjz0J5Gy5qntI

fetch( `https://api.giphy.com/v1/gifs/random?api_key=D7vn5alDyoPB5Ng6F45Qjz0J5Gy5qntI` )
    .then( response => response.json())
    .then( ({data}) => {
        console.log(data);
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append( img )
    } )