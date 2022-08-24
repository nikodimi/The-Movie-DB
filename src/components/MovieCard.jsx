import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const base_url = 'https://image.tmdb.org/t/p/w500'

    return (
        <Card className="mb-3" as={Link} to={`/movie/${movie.id}`}>
            <Card.Img variant="top" src={base_url + movie.poster_path} />
            <Card.Body>
                <Card.Title ><strong>Title: {movie.title}</strong></Card.Title>
                <Card.Text>Release date: {movie.release_date}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard