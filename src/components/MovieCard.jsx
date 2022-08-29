import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import reel from '../assets/images/film-reel2.webp'

const MovieCard = ({ movie }) => {
    const base_url = 'https://image.tmdb.org/t/p/w500'

    return (
        <Card className="mb-5 movie-card" as={Link} to={`/movie/${movie.id}`}>
            <Card.Img className='movie-card-img' variant="top" src={movie?.poster_path ? base_url + movie.poster_path : reel} />
            <Card.Body className='movie-card-body d-flex flex-column justify-content-between'>
                <div className="score-circle d-flex align-items-center justify-content-center">
                    <h5 className='score'>{movie.vote_average}</h5>
                </div>
                <Card.Title className="movie-card-title pb-2">{movie.title}</Card.Title>
                <Card.Text className="movie-card-text">Release date: {movie.release_date}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard