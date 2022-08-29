import Container from 'react-bootstrap/Container'
import NowPlayingCarousel from '../components/carousels/NowPlayingCarousel'
import PopularMoviesCarousel from '../components/carousels/PopularMoviesCarousel'
import TopRatedMoviesCarousel from '../components/carousels/TopRatedMoviesCarousel'

const HomePage = () => {
    

    return (
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
	)
}

export default HomePage
