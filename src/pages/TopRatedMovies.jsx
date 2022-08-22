import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import MovieCard from '../components/MovieCard'
import { useQuery } from 'react-query'
import { getTopRatedMovies} from '../services/tmdbAPI'


const TopRatedMovies = () => {
    const { data: movies, error, isError, isLoading, isSuccess } = useQuery('top-rated-movies', getTopRatedMovies)

	return (
        <Container className="py-3">
            <h1 className="mb-3">Top rated Movies!</h1>

            {isLoading &&  <Loading />}

            {isError && <WarningAlert message={error.message} />}

            <div>
                {isSuccess && (
                    <>
                        <Row>
                            {movies.results.map((movie) => (
                                <Col lg={3} md={4} sm={12} key={movie.id}>
                                    <MovieCard movie={movie} />
                                </Col>
                            ))}
                        </Row>
                    </>
                )}
            </div>
        </Container>
	)
}

export default TopRatedMovies