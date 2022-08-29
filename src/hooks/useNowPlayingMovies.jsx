import { useQuery } from "react-query"
import { getNowPlayingMovies } from "../services/tmdbAPI"

const useNowPlayingMovies = ( page ) => {
    return useQuery(['now-playing-movies', { page }], getNowPlayingMovies)
}

export default useNowPlayingMovies