import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import { useQuery } from 'react-query'
import { getGenres } from '../services/tmdbAPI'

const GenrePage = () => {
    const { data:genres, error, isError, isLoading, isSuccess } = useQuery('all-genres', getGenres)
    console.log(genres)
    
    return (
        <Container className="py-3 vh-100">
            <h1 className="mb-3 page-header">Genres!</h1>

            {isLoading &&  <Loading />}

            {isError && <WarningAlert message={error.message} />}

            {isSuccess && (

                <Row>
                    <Col>
                        <h5 className='text-center pb-2'>Choose a genre</h5>
                        <Dropdown className='text-center'>
                            <Dropdown.Toggle id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {genres.genres.map((genre) => (
                                    <Dropdown.Item 
                                        key={genre.id}>
                                        {genre.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            )}

        </Container>
    )
}

export default GenrePage