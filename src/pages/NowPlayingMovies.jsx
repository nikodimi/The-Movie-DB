import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/pagination'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const NowPlayingMovies = () => {
    const [page, setPage] = useState(1)
	const { data: movies, error, isError, isLoading, isSuccess } = useNowPlayingMovies(page)
    console.log(movies)

	return (
        <Container className="py-3">
            <h2 className="mb-3 page-header py-3">Now playing</h2>

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
                        onPreviousPage={() => setPage(currentPage => currentPage - 1)}
                        onNextPage={() => setPage(currentPage => currentPage + 1)}
                    />
                </>
            )}

        </Container>
	)
}

export default NowPlayingMovies