import React from "react"
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Notizia1 = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image
            src="https://purple-cdn.web-apps-prod.wo-cloud.com/purple/0f7a645f-e3c1-4a9c-a6dd-ccfa5dff68a7/ccaeda65-166e-49c6-bbcd-ece973f0339c/3cee2062-df0e-4ad4-8953-f873e5f75192/b720b83f-e1d9-41c7-b45a-12bfe409781d.jpg"
            alt="Meteo Italia"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Previsioni meteo</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Impennata termica al sud, presto un peggioramento al nord
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                Le condizioni meteo sullo stivale stanno per cambiare
                radicalmente. Impennata termica al meridione, nubi che aumentano
                e pioggia che arriva sulle regioni settentrionali. <br />
                <br />
                Lo sviluppo di un’onda mobile di alta pressione porterà una
                decisa impennata delle temperature, soprattutto in Sardegna, con
                valori quasi estivi. Ma l’arrivo dell’aria calda subtropicale
                anticipa un cambiamento: una saccatura atlantica si avvicina,
                portando piogge al nord-ovest già da sabato 12 aprile. <br />
                <br />
                Le nubi inizieranno ad aumentare sulla Liguria di Ponente, poi
                su Piemonte e tutto l’angolo nord-occidentale. Da lunedì 14
                aprile il maltempo interesserà il nord Italia per diversi
                giorni.
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

export default Notizia1
