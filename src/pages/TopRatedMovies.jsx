import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import MovieCard from '../components/MovieCard'
import useTopRatedMovies from '../hooks/useTopRatedMovies'


const TopRatedMovies = () => {
    const { data: movies, error, isError, isLoading, isSuccess } = useTopRatedMovies()

	return (
        <Container className="py-3">

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