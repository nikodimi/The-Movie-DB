import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const ActorDetails = ({ actor }) => {
    const base_url = 'https://image.tmdb.org/t/p/w500'

    return (
        <>
            <Row className='pb-5'>
                <Col lg={3} sm={12}>
                    <div className='img-wrapper'>
                        <img className="img-fluid" src={base_url + actor.profile_path} alt="" />
                    </div>
                    <div className="actor-info mt-2">
                        <h5>Name: {actor.name}</h5>
                        <p>Birthdate: {actor.birthday}</p>
                        <p>Place of birth: {actor.place_of_birth}</p>
                    </div>

                </Col>
                <Col lg={9} sm={12}>
                    <div className='movie-info h-100 d-flex flex-column justify-content-between'>
                        <div className="biography">
                            <p>{actor.biography}</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
			    {actor.credits.cast.map((movie, i) => (
                    <Col lg={2} sm={12} key={i}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={base_url + movie.poster_path}/>
                            <Card.Body>
                                <Card.Title as={Link} to={`/movie/${movie.id}`}
                                >
                                    {movie.title}</Card.Title>
                                {/* <Card.Text>{a.character}</Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default ActorDetails