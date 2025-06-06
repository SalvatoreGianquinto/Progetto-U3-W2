import React, { useState, useEffect } from "react"
import {
  Card,
  Col,
  Row,
  Image,
  Container,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

const MeteoGallery = () => {
  const [cities] = useState(["Rome", "Tokyo", "London", "New York"])
  const [weatherData, setWeatherData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const apiKeyWeather = "089951b9af8656a0e0fd05f84db66d2c"

  const cityImages = {
    Rome: "https://images.pexels.com/photos/12496258/pexels-photo-12496258.jpeg?auto=compress&cs=tinysrgb&w=600", // immagine di Roma
    Tokyo:
      "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600", // immagine di Tokyo
    London:
      "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600", // immagine di Londra
    "New York":
      "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600", // immagine di Parigi
  }

  useEffect(() => {
    setIsLoading(true)
    setIsLoading(false)

    // Fetch per ogni città
    cities.forEach((city) => {
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyWeather}&units=metric`

      fetch(weatherURL)
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error(
              "Errore nella fetch del meteo: " + response.statusText
            )
          }
        })
        .then((data) => {
          setWeatherData((prevData) => [...prevData, data])
        })
        .catch((err) => {
          console.log("Errore nel fetch del meteo:", err)
          setIsError(true)
          setIsLoading(false)
        })
    })
  }, [cities])

  return (
    <>
      {isError && (
        <Alert variant="danger" className="text-center m-0">
          Errore nel recupero dei dati meteo. Riprova più tardi.
        </Alert>
      )}

      <Alert className="text-center m-0">
        <h1>Benvenuti in EPIMeteo</h1>
        <p>Qui puoi trovare le notizie del meteo di tutto il mondo</p>
      </Alert>

      <Container fluid className="mt-4">
        <h1 className="mb-4">Meteo delle Città più gettonate</h1>

        {isLoading ? (
          <div className="d-flex justify-content-center mt-4">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row>
            {weatherData.map((data, index) => (
              <Col md={3} mb={5} key={index} className="g-3">
                <Card>
                  {cityImages[data.name] && (
                    <Image
                      src={cityImages[data.name]}
                      className="card-img-top"
                      alt={data.name}
                      fluid
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                      <i className="bi bi-thermometer-half"></i> Temperatura:{" "}
                      {data.main.temp}°C
                    </Card.Text>
                    <Card.Text>
                      <i className="bi bi-clouds-fill"></i>{" "}
                      {data.weather[0].description}
                    </Card.Text>
                    <Link to={`/city/${data.name}`} className="btn btn-primary">
                      Dettagli
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <h1 className="mt-5">Notizie d'Italia e del Mondo</h1>
        <Row className="mt-5">
          <Col md={6} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://purple-cdn.web-apps-prod.wo-cloud.com/purple/0f7a645f-e3c1-4a9c-a6dd-ccfa5dff68a7/ccaeda65-166e-49c6-bbcd-ece973f0339c/3cee2062-df0e-4ad4-8953-f873e5f75192/b720b83f-e1d9-41c7-b45a-12bfe409781d.jpg"
              />
              <Card.Body>
                <Card.Title>
                  Impennata termica al sud, presto un peggioramento al nord
                </Card.Title>
                <Card.Text>Notizia sul meteo in Italia</Card.Text>
                <Link to="/news/1">
                  <Button variant="primary">Vai alla notizia</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://purple-cdn.web-apps-prod.wo-cloud.com/purple/0f7a645f-e3c1-4a9c-a6dd-ccfa5dff68a7/ccaeda65-166e-49c6-bbcd-ece973f0339c/fb26d7a0-d442-418d-8099-cab157ad6508/thumbnails/b85bcfdb-a675-4323-8ee9-573d15db2082.jpg?fm=webp"
              />
              <Card.Body>
                <Card.Title>
                  L'ondata di freddo anomalo colpisce l'est Europa
                </Card.Title>
                <Card.Text>Notizia sul meteo in Est Europa</Card.Text>
                <Link to="/news/2">
                  <Button variant="primary">Vai alla notizia</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MeteoGallery
