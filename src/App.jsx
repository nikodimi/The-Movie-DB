import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NowPlayingMovies from './pages/NowPlayingMovies'
import PopularMovies from './pages/PopularMovies'
import TopRatedMovies from './pages/TopRatedMovies'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movie/:id" element={<MoviePage />} />
				<Route path="/now-playing" element={<NowPlayingMovies />} />
                <Route path="/person/:id" element={<ActorPage />} />
				<Route path="/popular" element={<PopularMovies />} />
				<Route path="/top-rated" element={<TopRatedMovies />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

            <ReactQueryDevtools />
		</div>
	)
}

export default App
