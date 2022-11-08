 import cloudinaryApi from '@/api/cloudinaryApi'
 
 const uploadImages = async(file) => {
    if (!file) {
        return
    }
    try {
        const formData = new FormData()
        formData.append('upload_preset','curso_vue' )
        formData.append('file',file )
        
        const { data } = await  cloudinaryApi.post('/image/upload', formData)

        return data.secure_url
    } catch (error) {
        console.error('Error al cargar el archivo', error)
        return null
    }
 }

 export default uploadImages