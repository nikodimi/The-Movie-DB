import Container from 'react-bootstrap/Container'
import NowPlayingCarousel from '../components/carousels/NowPlayingCarousel'
import PopularMoviesCarousel from '../components/carousels/PopularMoviesCarousel'
import TopRatedMoviesCarousel from '../components/carousels/TopRatedMoviesCarousel'

const HomePage = () => {
    

    return (
		<Container className="py-3">

            <h2 className="mb-3 page-header py-3">Popular</h2>

            <PopularMoviesCarousel/>

            <hr />

            <TopRatedMoviesCarousel />

            <hr />

            <h2 className="mb-3 page-header py-3">Now Playing</h2>

            <NowPlayingCarousel />

        </Container>
	)
}

export default HomePage
