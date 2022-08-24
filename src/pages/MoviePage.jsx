import Container from 'react-bootstrap/Container'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import MovieDetails from '../components/MovieDetails'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getMovie } from '../services/tmdbAPI'

const MoviePage = () => {
    const { id } = useParams()
    const { data: movie, error, isError, isLoading, isSuccess } = useQuery(['movie', { id }], getMovie)
    console.log(movie)

  return (
    <Container className="py-3">
        <h1 className="mb-3">Single Movie</h1>

        {isLoading &&  <Loading />}

        {isError && <WarningAlert message={error.message} />}

        <div>
            {isSuccess && (
                
                <MovieDetails movie={movie}/>

            )}
        </div>
    </Container>
  )
}

export default MoviePage