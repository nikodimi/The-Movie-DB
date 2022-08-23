import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import MovieCard from '../components/MovieCard'
import { useQuery } from 'react-query'
import { getNowPlayingMovies } from '../services/tmdbAPI'


const NowPlayingMovies = () => {
	const { data: movies, error, isError, isLoading, isSuccess } = useQuery('now-playing-movies', getNowPlayingMovies)

	return (
        <Container className="py-3">
            <h1 className="mb-3">Now playing!</h1>

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

export default NowPlayingMovies