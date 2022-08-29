import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import reel from '../assets/images/film-reel2.webp'
import avatar from '../assets/images/avatar.jpg'

const ActorDetails = ({ actor }) => {
    const base_url = 'https://image.tmdb.org/t/p/w500'

    return (
        <>
            <Row className='mb-5 actor'>
                <Col lg={3} md={5} sm={12}>
                    <div className='img-wrapper text-center'>
                        <img className="img-fluid actor-img" src={actor?.profile_path ? base_url + actor.profile_path : avatar} alt="" />
                    </div>
                    <h4 className='my-3'>{actor.name}</h4>
                    <hr />
                    <h5>Birthday</h5>
                    <p>{actor.place_of_birth ? actor.birthday : 'N/A'}</p>
                    <h5>Place of birth</h5>
                    <p>{actor.place_of_birth ? actor.place_of_birth : "N/A"}</p>
                    <hr />
                </Col>
                <Col lg={9} md={7} sm={12}>
                    <div className='actor-info'>
                        <h5 className='pb-3'>Biography</h5>
                        <p>{actor?.biography ? actor.biography : "N/A "}</p>
                    </div>
                </Col>
            </Row>

            <Row className='mt-5'>
			    {actor.credits.cast.map((movie, i) => (
                    <Col lg={2} md={3} sm={4} xs={6} key={i}>
                        <Card className="mb-5 movie-cards">
                            <Card.Img variant="top movie-images" src={movie?.poster_path ? base_url + movie.poster_path : reel}/>
                            <Card.Body>
                                <Card.Title className="movie-titles" as={Link} to={`/movie/${movie.id}`}
                                >
                                    {movie.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default ActorDetails