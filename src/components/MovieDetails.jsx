import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import { Link } from 'react-router-dom'

const MovieDetails = ({ movie }) => {
    const base_url = 'https://image.tmdb.org/t/p/w500'

    return (
        <>
            <Row className='pb-5'>
                <Col lg={3} sm={12}>
                    <div className='img-wrapper'>
                        <img className="img-fluid" src={base_url + movie.poster_path} alt="" />
                    </div>
                </Col>
                <Col lg={9} sm={12}>
                    <div className='movie-info h-100 d-flex flex-column justify-content-between'>
                        <div className="title-content">
                            <h1 className='mx-2'>{movie.title}</h1>
                        </div>
                        <div className='sub-content d-flex align-content-center'>
                            <h4 className='mx-2'>{movie.release_date}</h4>
                            {movie.genres.map((genre, i) => (
                                <p className='genre mx-2' key={i}>{genre.name}</p>
                            ))}
                        </div>
                        <div className="tagline-content">
                            <h5 className='fst-italic'>{movie.tagline}</h5>
                        </div>
                        <div className="overview-content">
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>    
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
			    {movie.credits.cast.map((person, i) => (
                    <Col lg={2} sm={12} key={i}>
                        <Card className="mb-3">
                            {/* <Card.Img variant="top" src={base_url + person.profile_path}/> */}
                            <Card.Body>
                                <Card.Title >{person.name}</Card.Title>
                                <Card.Text>{person.character}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default MovieDetails