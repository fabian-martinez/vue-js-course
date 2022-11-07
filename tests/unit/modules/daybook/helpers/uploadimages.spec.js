import axios from 'axios'
import 'setimmediate'
import cloudinary from 'cloudinary'

import uploadImages from '@/modules/daybook/helpers/uploadImages'

cloudinary.config({
    cloud_name: 'ddwvbyatp', 
    api_key: '729536536497577', 
    api_secret: 'eqWSdnl-5zUfIcW1J4XMCy76KLY',
})

describe('Prueba el modulo de carga de archivos', () => {
    it('Debe cargar un archivo y retornar el url', async() => {
         
        const {data} = await  axios.get('https://res.cloudinary.com/ddwvbyatp/image/upload/v1666547595/curso_vue/m867abnus3ece1d0l5y8.jpg',{
             responseType: 'arraybuffer'
        })

        const file = new File([ data ], 'Foto.jpg')
        const url = await uploadImages( file )

        expect( typeof url ).toBe('string')

        // Tomar id
        const segment = url.split('/')
        const imageId = segment[segment.length - 1].replace('.jpg','')
        const deted = await cloudinary.v2.api.delete_resources(`curso_vue/${imageId}`)
        
    });
});