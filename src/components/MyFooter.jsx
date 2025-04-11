import { Container, Row, Col, ListGroup, Button } from "react-bootstrap"

const MyFooter = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          {/* Sezione "Informazioni" */}
          <Col md={4}>
            <h5>Informazioni</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-white border-0">
                <a href="/about" className="text-white">
                  Chi Siamo
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-0">
                <a href="/privacy" className="text-white">
                  Privacy Policy
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white border-0">
                <a href="/terms" className="text-white">
                  Termini e Condizioni
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Sezione "Contattaci" */}
          <Col md={4}>
            <h5>Contattaci</h5>
            <p>Per qualsiasi domanda, non esitare a contattarci:</p>
            <Button variant="outline-light" href="mailto:support@meteoapp.com">
              Invia una Email
            </Button>
          </Col>

          {/* Sezione Social Media */}
          <Col md={4}>
            <h5>Seguici</h5>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2025 MeteoApp. Tutti i diritti riservati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
