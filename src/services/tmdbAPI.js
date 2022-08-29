import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_API_KEY
const adult = "&include_adult=false"

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

 export const getTopRatedMovies = async ({ queryKey }) => {
    const [_key,  { page }  ] = queryKey
    return get(`/movie/top_rated?api_key=${API_KEY}&page=${page}${adult}`)
}

/**
 * Get popular Movies
 */

export const getPopularMovies = async ({ queryKey }) => {
    const [_key,  { page }  ] = queryKey
    return get(`/movie/popular?api_key=${API_KEY}&page=${page}${adult}`)
}

/**
 * Get now-playing Movies
 */

export const getNowPlayingMovies = async ({ queryKey }) => {
    const [_key,  { page }  ] = queryKey
    return get(`/movie/now_playing?api_key=${API_KEY}&page=${page}${adult}`)
}

/**
 * Get single Movie
 */

export const getMovie = async ({ queryKey }) => {
    const [_key, { id }] = queryKey
    return get(`/movie/${id}?api_key=${API_KEY}${adult}&append_to_response=credits`)
}

/**
 * Get Actor
 */

 export const getActor = async ({ queryKey }) => {
    const [_key, { id }] = queryKey
    return get(`/person/${id}?api_key=${API_KEY}${adult}&append_to_response=credits`)
}

/**
 * Get all Genres
 */

export const getGenres = async () => {
    return get(`/genre/movie/list?api_key=${API_KEY}`)
}

/**
 * Get selected Genre 
 */

export const getGenre = async ({ queryKey }) => {
    const [_key, { page, genre_id}] = queryKey
    return get(`/discover/movie?api_key=${API_KEY}&with_genres=${genre_id}&page=${page}${adult}`)
}

export default {
    getTopRatedMovies,
    getPopularMovies,
    getNowPlayingMovies,
    getMovie,
    getActor,
    getGenres,
    getGenre
}