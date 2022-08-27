import { useQuery } from 'react-query'
import { getTopRatedMovies } from '../services/tmdbAPI'

const useTopRatedMovies = () => {
    return useQuery('top-rated-movies', getTopRatedMovies)
}

export default useTopRatedMovies