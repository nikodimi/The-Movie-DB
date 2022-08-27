import { useQuery } from "react-query"
import { getMovie } from "../services/tmdbAPI"

const useMovie = ( id ) => {
    return useQuery(['movie', { id }], getMovie)
}

export default useMovie