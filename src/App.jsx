import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NowPlayingMovies from './pages/NowPlayingMovies'
import PopularMovies from './pages/PopularMovies'
import TopRatedMovies from './pages/TopRatedMovies'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/now-playing" element={<NowPlayingMovies />} />
				<Route path="/popular" element={<PopularMovies />} />
				<Route path="/top-rated" element={<TopRatedMovies />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
