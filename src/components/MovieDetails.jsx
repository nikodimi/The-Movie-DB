import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import avatar from '../assets/images/avatar.jpg'
import reel from '../assets/images/film-reel2.webp'

const MovieDetails = ({ movie }) => {
    const base_url = 'https://image.tmdb.org/t/p/w500'

    return (
        <>
            <Row className='mb-5'>
                <Col lg={4} md={6}sm={12} className="m-auto">
                    <div className='img-wrapper text-center'>
                        <img className="img-fluid single-movie-img" src={movie?.poster_path ? base_url + movie.poster_path : reel} alt="" />
                    </div>
                </Col>
                <Col lg={8} md={6} sm={12}>
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
                            <p>{Math.round(movie.vote_average * 10) / 10}</p>
                        </div>
                        <div>
                            <h5>Genre</h5>
                            <div className='d-flex'>
                                {movie.genres.map((genre) => (
                                    <p className='movie-genres' key={genre.id}>{genre.name}</p>
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

            <Row className='pt-4'>
                
                <h3 className='cast-header pb-2'>Cast</h3>

			    {movie.credits.cast.map((person) => (
                    <Col lg={2} md={3} sm={4} xs={6} key={person.id}>
                        <Card className="mb-5 cast-card">
                            <Card.Img variant="top cast-image" src={person?.profile_path ? base_url + person.profile_path : avatar}/>
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