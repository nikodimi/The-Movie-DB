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

/**
 * Get popular Movies
 */

export const getPopularMovies = async () => {
    return get(`/movie/popular?api_key=${API_KEY}`)
}

/**
 * Get now-playing Movies
 */

export const getNowPlayingMovies = async () => {
    return get(`/movie/now_playing?api_key=${API_KEY}`)
}

/**
 * Get single Movie
 */

export const getMovie = async ({ queryKey }) => {
    const [_key, { id }] = queryKey
    return get(`/movie/${id}?api_key=${API_KEY}&append_to_response=credits`)
}

/**
 * Get Actor
 */

 export const getActor = async ({ queryKey }) => {
    const [_key, { id }] = queryKey
    return get(`/person/${id}?api_key=${API_KEY}&append_to_response=credits`)
}

export default {
    getTopRatedMovies,
    getPopularMovies,
    getNowPlayingMovies,
    getMovie,
    getActor
}