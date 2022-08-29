import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import reel from '../../assets/images/film-reel2.webp'
import Loading from '../Loading'
import WarningAlert from '../alerts/WarningAlert'
import usePopularMovies from '../../hooks/usePopularMovies'

const PopularMoviesCarousel = () => {
    const { data: movies, error, isError, isLoading, isSuccess } = usePopularMovies()
    const base_url = 'https://image.tmdb.org/t/p/w500'
    console.log(movies)

    return (
        <Row className='mb-5'>
            <Col sm={12} >
                        
                {isLoading &&  <Loading />}

                {isError && <WarningAlert message={error.message} />}

                {isSuccess && (

                    <Carousel>
                        {movies.results.map((movie) => (
                            <Carousel.Item key={movie.id}>
                                <Row className='d-flex'>
                                    <Col lg={3} md={4}sm={10} xs={10} className="m-auto">
                                        <div className='img-wrapper'>
                                            <img className="img-fluid single-movie-img" src={movie?.poster_path ? base_url + movie.poster_path : reel} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg={9} md={8} sm={10} xs={10} className="m-auto">
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
                                            {/* <div>
                                                <h5>Genre</h5>
                                            </div> */}
                                            <div>
                                                <h5>Plot</h5>
                                                <p>{movie.overview}</p>    
                                            </div>
                                        </div>
                                    </Col>
                                </Row>    
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </Col>
        </Row>

    )
}

export default PopularMoviesCarousel