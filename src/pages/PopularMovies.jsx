import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import MovieCard from '../components/MovieCard'
import usePopularMovies from '../hooks/usePopularMovies'


const PopularMovies = () => {
    const { data: movies, error, isError, isLoading, isSuccess } = usePopularMovies()

	return (
        <Container className="py-3">
            <h2 className="mb-3 page-header py-3">Popular</h2>

            {isLoading &&  <Loading />}

            {isError && <WarningAlert message={error.message} />}

            <div>
                {isSuccess && (
                    <>
                        <Row>
                            {movies.results.map((movie) => (
                                <Col lg={3} md={3} sm={4} xs={10}key={movie.id}>
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

export default PopularMovies