import { useQuery } from "react-query"
import { getActor } from "../services/tmdbAPI"

const useActor = ( id ) => {
  return useQuery(['actor', { id }], getActor)
}

export default useActor