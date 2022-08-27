import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar expand="md">
			<Container>
				<Navbar.Brand className="logo" as={Link} to="/">TMDB</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
						<Nav.Link as={NavLink} end to="/now-playing">Now playing</Nav.Link>
						<Nav.Link as={NavLink} end to="/popular">Popular</Nav.Link>
						<Nav.Link as={NavLink} end to="/top-rated">Top Rated</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
