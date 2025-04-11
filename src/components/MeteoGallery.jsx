import React, { useState, useEffect } from "react"
import { Card, Col, Row, Image, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

const MeteoGallery = () => {
  const [cities] = useState(["Rome", "Tokyo", "London", "Paris"])
  const [weatherData, setWeatherData] = useState([])
  const apiKeyWeather = "089951b9af8656a0e0fd05f84db66d2c"

  // Oggetto con le immagini fisse per ogni città
  const cityImages = {
    Rome: "https://images.pexels.com/photos/12496258/pexels-photo-12496258.jpeg?auto=compress&cs=tinysrgb&w=600", // immagine di Roma
    Tokyo:
      "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600", // immagine di Tokyo
    London:
      "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600", // immagine di Londra
    Paris:
      "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=600", // immagine di Parigi
  }

  useEffect(() => {
    cities.forEach((city) => {
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyWeather}&units=metric`

      fetch(weatherURL)
        .then((response) => {
          if (response.ok) {
            return response.json() // Risposta corretta, la converte in JSON
          } else {
            throw new Error(
              "Errore nella fetch del meteo: " + response.statusText
            )
          }
        })
        .then((data) => {
          // Aggiungi i dati meteo al nostro stato
          setWeatherData((prevData) => [...prevData, data])
        })
        .catch((err) => {
          console.log("Errore nel fetch del meteo:", err)
        })
    })
  }, [cities])

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Meteo delle Città più gettonate</h1>
      <Row>
        {weatherData.map((data, index) => (
          <Col md={3} mb={5} key={index}>
            <Card>
              {/* Mostra l'immagine fissa per ogni città */}
              {cityImages[data.name] && (
                <Image
                  src={cityImages[data.name]} // Usa l'immagine fissa associata alla città
                  className="card-img-top"
                  alt={data.name}
                  fluid
                />
              )}
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>Temperatura: {data.main.temp}°C</Card.Text>
                <Card.Text>{data.weather[0].description}</Card.Text>
                <Link to={`/city/${data.name}`} className="btn btn-primary">
                  Dettagli
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MeteoGallery
