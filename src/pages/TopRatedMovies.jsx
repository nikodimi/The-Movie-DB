import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/pagination'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import { useSearchParams } from 'react-router-dom'

const TopRatedMovies = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        page:1
    })
    const page = searchParams.get('page')
    const { data: movies, error, isError, isLoading, isSuccess } = useTopRatedMovies(page)

	return (
        <Container className="py-3">
            <h2 className="mb-3 page-header py-3">Top Rated Movies</h2>

            {isLoading &&  <Loading />}

            {isError && <WarningAlert message={error.message} />}

            {isSuccess && (
                <>
                    <Row>
                        {movies.results.map((movie) => (    
                            <Col lg={3} md={4} sm={6} xs={12}key={movie.id}>
                                <MovieCard movie={movie} />
                            </Col>
                        ))}
                    </Row>
                    
                    <Pagination
                        page={page}
                        numberOfPages={movies.total_pages}
                        hasPreviousPage={movies.page > 1}
                        hasNextPage={movies.page < 65}
                        onPreviousPage={() => setSearchParams({page: Number(page) - 1})}
                        onNextPage={() => setSearchParams({page: Number(page) + 1})}
                    />
                </>
            )}
            
        </Container>
	)
}

export default TopRatedMovies