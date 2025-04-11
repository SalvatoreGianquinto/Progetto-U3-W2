import React from "react"
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap"

const Notizia2 = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="mb-4">
          <Image
            src="https://purple-cdn.web-apps-prod.wo-cloud.com/purple/0f7a645f-e3c1-4a9c-a6dd-ccfa5dff68a7/ccaeda65-166e-49c6-bbcd-ece973f0339c/fb26d7a0-d442-418d-8099-cab157ad6508/cae54258-07c7-4039-8a1b-275e4ec77e87.jpg"
            alt="Ondata di freddo in est Europa"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                L'ondata di freddo anomalo colpisce l'Est Europa
              </Card.Title>
              <Card.Text>
                Su paesi come Russia occidentale, Bielorussia, Ucraina e Polonia
                sembra di essere tornati in pieno inverno. In questo scorcio di
                aprile sono stati misurati valori fino a 10°C inferiori alle
                medie tipiche del periodo. In diverse occasioni la neve è scesa
                fino in pianura.
                <br />
                <br />
                La circolazione fredda che pochi giorni fa ha interessato
                l’Europa fino a basse latitudini ha portato temperature degne
                dell'inverno sull'est del continente. La colonnina di mercurio è
                scesa fino a -10°C in alcune aree rurali, con nevicate a Mosca
                che hanno superato i 15cm.
                <br />
                <br />
                L’ondata ha colpito anche il Mar Nero, con rare nevicate spinte
                fino alle coste. Un evento anomalo per aprile, che potrebbe
                avere ripercussioni anche nei prossimi giorni.
              </Card.Text>
              <Button variant="primary" href="/">
                Torna alla Home
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Notizia2
