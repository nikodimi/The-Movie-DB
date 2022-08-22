import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from '../components/Loading'
import { useQuery } from 'react-query'
import { getTopRatedMovies} from '../services/tmdbAPI'


const TopRatedMovies = () => {
    const { data: movies, isError, isLoading, isSuccess } = useQuery('movies', getTopRatedMovies)

	return (
        <Container className="py-3">
            <h1 className="mb-3">Top rated Movies!</h1>

            {isLoading &&  <Loading />}

            {isError && (<p>An error occurred!</p>)}

            <div>
                {isSuccess && (
                    <>
                        <Row>
                            {movies.results.map((movie) => (
                                <Col lg={3} md={4} sm={12} key={movie.id}>
                                    <h4>{movie.title}</h4>
                                    <p>{movie.release_date}</p>
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