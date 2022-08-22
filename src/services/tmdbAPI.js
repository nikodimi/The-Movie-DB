import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_API_KEY

/**
 * GET an endpoint
 */

 const get = async (endpoint) => {
    const response = await axios.get(endpoint)

    return response.data
} 

/**
 * Get top rated Movies
 */

 export const getTopRatedMovies = async () => {
    return get(`/movie/top_rated?api_key=${API_KEY}`)
}

export default {
    getTopRatedMovies
}