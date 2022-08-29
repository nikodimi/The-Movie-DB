import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/pagination'
import { useQuery } from 'react-query'
import { getGenres } from '../services/tmdbAPI'
import { useSearchParams } from 'react-router-dom'
import { getGenre } from '../services/tmdbAPI'

const GenrePage = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        page:1,
        genre_id:""
    })
    const page = searchParams.get('page')
    const genre_id = searchParams.get('genre_id') ?? ''
    const { data:genres, error, isError, isLoading, isSuccess } = useQuery('all-genres', getGenres)
    const { data: genre } = useQuery(['selectedGenre', { page, genre_id}] , getGenre)

    return (
        <Container className="py-3 genre-container">
            <h1 className="mb-3 page-header py-3">Genres</h1>

            {isLoading &&  <Loading />}

            {isError && <WarningAlert message={error.message} />}

            {isSuccess && (

                <Row className="mb-5">
                    <Col>
                        <h5 className='text-center pb-2'>Choose a genre</h5>
                        <Dropdown className='text-center'>
                            <Dropdown.Toggle id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {genres.genres.map((genre) => (
                                    <Dropdown.Item 
                                        key={genre.id}
                                        onClick={()  => {
                                            setSearchParams({
                                                page:1,
                                                genre_id: genre.id 
                                            })
                                        }}
                                        >
                                        {genre.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

            )}
                {genre_id && isSuccess && (
                    <>
                        <Row>
                            {genre?.results.map((movie) => (
                                <Col lg={3} md={3} sm={4} xs={10}key={movie.id}>
                                    <MovieCard movie={movie} genre_id={genre_id} pa/>
                                </Col>
                            ))}
                        </Row>

                        <Pagination
                            page={page}
                            numberOfPages={genre?.total_pages}
                            hasPreviousPage={genre?.page > 1}
                            hasNextPage={genre?.page < 65}
                            onPreviousPage={() => setSearchParams({page: Number(page) - 1, genre_id})}
                            onNextPage={() => setSearchParams({page: Number(page) + 1, genre_id})}
                        />
                    </>
                )}

        </Container>
    )
}

export default GenrePage