import { useQuery } from 'react-query'
import { getPopularMovies } from '../services/tmdbAPI'

const usePopularMovies = () => {
    return useQuery('popular-movies', getPopularMovies)
}

export default usePopularMovies