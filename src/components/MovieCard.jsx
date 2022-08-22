import Card from 'react-bootstrap/Card'

const MovieCard = ({ movie }) => {
    return (
        <Card className="mb-3">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title><strong>Title: {movie.title}</strong></Card.Title>
                <Card.Text>Release date: {movie.release_date}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard