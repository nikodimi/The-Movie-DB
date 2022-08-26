import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

        </>
    )
}

export default ActorDetails