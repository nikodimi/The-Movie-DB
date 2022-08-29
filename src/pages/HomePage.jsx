import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NowPlayingCarousel from '../components/carousels/NowPlayingCarousel'
import PopularMoviesCarousel from '../components/carousels/PopularMoviesCarousel'
import TopRatedMoviesCarousel from '../components/carousels/TopRatedMoviesCarousel'

const HomePage = () => {
    

    return (

        <>
            <Container fluid className='p-0 hero-banner'>
                <Row>
                    <Col>
                        <div class="hero-image d-flex justify-content-center align-items-center">
                            <div class="hero-text">
                                <h1>Welcome.</h1>
                                <h4>Millions of movies, TV shows and people to discover. Explore now.</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>

            <Container className="py-3">

                <h2 className="mb-3 page-header py-3">Popular Movies</h2>

                <PopularMoviesCarousel/>

                <hr />

                <h2 className="mb-3 page-header py-3">Top Rated Movies</h2>

                <TopRatedMoviesCarousel />

                <hr />

                <h2 className="mb-3 page-header py-3">Now Playing Movies</h2>

                <NowPlayingCarousel />

            </Container>
        </>
	)
}

export default HomePage
