import axios from 'axios';

const techStoreDb = axios.create({
    baseURL: "https://techstore-rest-api.vercel.app"

})

export default techStoreDb;