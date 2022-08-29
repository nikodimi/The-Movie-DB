import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (

        <Container fluid className='footer'>
            <Row>
                <Col>
                    <div className="footer-content d-flex justify-content-center py-3">
                        <p className='m-0'>Copyright © 2022 - All right reserved by Nisse</p>
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Footer