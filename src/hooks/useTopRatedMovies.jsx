import { useQuery } from 'react-query'
import { getTopRatedMovies } from '../services/tmdbAPI'

const useTopRatedMovies = ( page ) => {
    return useQuery(['top-rated-movies', { page }], getTopRatedMovies)
}

export default useTopRatedMovies