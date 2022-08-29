import { useQuery } from 'react-query'
import { getPopularMovies } from '../services/tmdbAPI'

const usePopularMovies = ( page ) => {
    return useQuery(['popular-movies', { page }], getPopularMovies)
}

export default usePopularMovies