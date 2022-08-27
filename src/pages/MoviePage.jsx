import Container from 'react-bootstrap/Container'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import MovieDetails from '../components/MovieDetails'
import { useParams } from 'react-router-dom'
import useMovie from '../hooks/useMovie'

const MoviePage = () => {
    const { id } = useParams()
    const { data: movie, error, isError, isLoading, isSuccess } = useMovie(id)
    console.log(movie)
    
    return (
        <Container className="py-3">
            <h1 className="my-3"></h1>

            {isLoading &&  <Loading />}

            {isError && <WarningAlert message={error.message} />}

            {isSuccess && (
                    
                <MovieDetails movie={movie}/>

            )}

        </Container>
    )
}

export default MoviePage