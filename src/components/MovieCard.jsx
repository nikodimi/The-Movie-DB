import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const base_url = 'https://image.tmdb.org/t/p/w500'

    return (
        <Card className="mb-5 movie-card" as={Link} to={`/movie/${movie.id}`}>
            <Card.Img className='movie-card-img' variant="top" src={base_url + movie.poster_path} />
            <Card.Body className='d-flex flex-column justify-content-between'>
                <div className="score-circle d-flex align-items-center justify-content-center">
                    <h5 className='score'>{movie.vote_average}</h5>
                </div>
                <Card.Title className="pb-2">{movie.title}</Card.Title>
                <Card.Text>Release date: {movie.release_date}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard