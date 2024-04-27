import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
         Authorization : import.meta.env.VITE_TMDB_API_KEY
    }
})

export default instance;