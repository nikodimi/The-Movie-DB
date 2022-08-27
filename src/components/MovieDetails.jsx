import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const MovieDetails = ({ movie }) => {
    const base_url = 'https://image.tmdb.org/t/p/w500'

    return (
        <>
            <Row className='mb-5'>
                <Col lg={4} md={6}sm={8} xs={10} className="m-auto">
                    <div className='img-wrapper'>
                        <img className="img-fluid single-movie-img" src={base_url + movie.poster_path} alt="" />
                    </div>
                </Col>
                <Col lg={8} md={6} sm={8} xs={10}>
                    <div className='movie-info h-100 d-flex flex-column justify-content-around'>
                        <div>
                            <h2>{movie.title}</h2>
                        </div>
                        <div>
                            <h5>Release date</h5>
                            <p>{movie.release_date}</p>
                        </div>
                        <div>
                            <h5>Rating</h5>
                            <p>{movie.vote_average}</p>
                        </div>
                        <div>
                            <h5>Genre</h5>
                            <div className='d-flex'>
                                {movie.genres.map((genre, i) => (
                                    <p className='movie-genres' key={i}>{genre.name}</p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h5>Plot</h5>
                            <p>{movie.overview}</p>    
                        </div>
                    </div>
                </Col>
            </Row>

            <hr></hr>

            <Row className='pt-4 single-movie-cast'>
                
                <h3 className='cast-header pb-2'>Cast</h3>

			    {movie.credits.cast.map((person, i) => (
                    <Col lg={2} md={3} sm={4} xs={6} key={i}>
                        <Card className="mb-5 cast-card">
                            <Card.Img variant="top cast-image" src={base_url + person.profile_path}/>
                            <Card.Body>
                                <Card.Title className="cast-title"as={Link} to={`/person/${person.id}`}
                                >
                                    {person.name}</Card.Title>
                                <Card.Text className='cast-text'>{person.character}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default MovieDetails