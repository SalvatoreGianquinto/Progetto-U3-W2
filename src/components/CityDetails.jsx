import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Card, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import PrevisioniGiorni from "./PrevisioniGiorno"

const CityDetails = () => {
  const { cityName } = useParams() // Ottieni il nome della città dalla URL
  const [cityData, setCityData] = useState(null)
  const [cityImage, setCityImage] = useState(null) // Stato per l'immagine della città
  const apiKeyWeather = "089951b9af8656a0e0fd05f84db66d2c" // Sostituisci con la tua chiave API di OpenWeatherMap
  const apiKeyPexels =
    "3ZpdM6xl5UoFZbrcpWJPWhj4FViY5TYVYR70jLpGdF2pSPNidU3e2qhL" // Sostituisci con la tua chiave API di Pexels

  const cityImages = {
    Rome: "https://images.pexels.com/photos/12496258/pexels-photo-12496258.jpeg?auto=compress&cs=tinysrgb&w=600",
    Tokyo:
      "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600",
    London:
      "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600",
    Paris:
      "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=600",
  }

  useEffect(() => {
    // Fetch del meteo
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKeyWeather}&units=metric`

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
        setCityData(data) // Imposta i dati meteo
      })
      .catch((err) => {
        console.log("Errore nel fetch del meteo:", err)
      })
  }, [cityName])

  useEffect(() => {
    // Fetch dell'immagine con l'API di Pexels
    const imageURL = `https://api.pexels.com/v1/search?query=${cityName}&per_page=1` // Cerca una sola immagine

    fetch(imageURL, {
      headers: {
        Authorization: apiKeyPexels, // Usa la chiave API di Pexels
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Imposta l'immagine della città
        setCityImage(
          data.photos[0]?.src?.large || "https://via.placeholder.com/600"
        )
      })
      .catch((err) => {
        console.log("Errore nel fetch dell'immagine:", err)
        setCityImage("https://placedog.net/400x00") // Immagine di fallback
      })
  }, [cityName])

  return (
    <Container fluid className="mt-4 d-flex justify-content-center">
      {cityData ? (
        <Row className="justify-content-center">
          <h1 className="text-center">Meteo di: {cityData.name}</h1>
          <Col md={6}>
            <Card>
              {/* Mostra l'immagine della città ottenuta da Pexels */}
              <Card.Img
                variant="top"
                src={cityImage} // Mostra l'immagine di Pexels
                alt={cityData.weather[0].description}
              />
              <Card.Body>
                <Card.Title>{cityData.name}</Card.Title>
                <Card.Text>Temperatura: {cityData.main.temp}°C</Card.Text>
                <Card.Text>{cityData.weather[0].description}</Card.Text>
                <Card.Text>Umidità: {cityData.main.humidity}%</Card.Text>
                <Card.Text>Vento: {cityData.wind.speed} m/s</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="text-center mt-4">
            <Link to="/" className="btn btn-primary">
              Torna alla Home
            </Link>
          </Col>
          <PrevisioniGiorni city={cityData.name} />
        </Row>
      ) : (
        <p>Caricamento in corso...</p>
      )}
    </Container>
  )
}

export default CityDetails
