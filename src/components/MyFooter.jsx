import { Container, Row, Col, ListGroup, Button } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

const MyFooter = () => {
  return (
    <footer className="bg-warning text-white py-4 mt-1">
      <Container>
        <Row>
          {/* Sezione "Informazioni" */}
          <Col md={4}>
            <h5 className="text-dark">Informazioni</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-warning text-white border-0">
                <a href="/about" className="text-dark">
                  Chi Siamo
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-warning text-white border-0">
                <a href="/privacy" className="text-dark">
                  Privacy Policy
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-warning text-white border-0">
                <a href="/terms" className="text-dark">
                  Termini e Condizioni
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Sezione "Contattaci" */}
          <Col md={4} className="text-dark">
            <h5>Contattaci</h5>
            <p>Per qualsiasi domanda, non esitare a contattarci:</p>
            <Button variant="outline-dark" href="mailto:support@meteoapp.com">
              Invia una Email
            </Button>
          </Col>

          {/* Sezione Social Media */}
          <Col md={4}>
            <h5 className="text-dark">Seguici</h5>
            <div>
              <i className="bi bi-facebook fs-2 me-3 text-dark"></i>
              <i className="bi bi-twitter-x fs-2 me-3 text-dark"></i>
              <i className="bi bi-instagram fs-2 text-dark"></i>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center text-dark">
            <p>&copy; 2025 MeteoApp. Tutti i diritti riservati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
