import axios from 'axios' 

const cloudinaryApi = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/ddwvbyatp'
})

export default cloudinaryApi