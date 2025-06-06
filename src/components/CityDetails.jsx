import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Card, Row, Col, Spinner, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import PrevisioniGiorno from "./PrevisioniGiorno"

const CityDetails = () => {
  const { cityName } = useParams()
  const [cityData, setCityData] = useState(null)
  const [cityImage, setCityImage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const apiKeyWeather = "089951b9af8656a0e0fd05f84db66d2c"
  const apiKeyPexels =
    "3ZpdM6xl5UoFZbrcpWJPWhj4FViY5TYVYR70jLpGdF2pSPNidU3e2qhL"

  const weatherBackgrounds = {
    Clear:
      "https://t3.ftcdn.net/jpg/04/43/10/34/360_F_443103420_6k4yyToTAys5xQKvOnME0bN1xoFFRNSR.jpg",
    Clouds:
      "https://images.unsplash.com/photo-1657598339759-fd1432d833f0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWRzJTIwaW4lMjBza3l8ZW58MHx8MHx8fDA%3D",
    Rain: "https://images.stockcake.com/public/0/7/9/0796bd2f-b458-4d4a-b923-19fcd6d22146_large/stormy-rainy-sky-stockcake.jpg",
    Snow: "https://media.istockphoto.com/id/614332492/photo/snow-storm.jpg?s=612x612&w=0&k=20&c=UT779vnlT6q5tRGHR_JbweEC8L0tHbXMeogrAqJeQSo=",
    Thunderstorm:
      "https://media.istockphoto.com/id/993959156/photo/large-lightning-strike-at-dusk-on-tornado-alley.jpg?s=612x612&w=0&k=20&c=qfqLcyiZDCNroEdj-nM6GMidgfIesY06EvXofZzXjC0=",
    Drizzle:
      "https://gray-kcrg-prod.gtv-cdn.com/resizer/v2/2IK4VGMVRFJEPMLI3PODX37CSA.jpg?auth=a555724a54fbd330b0cd2d98ec777c79fb7388fe70e4dcff4ebaeb66f0d059a4&width=800&height=450&smart=true",
  }

  const [backgroundImage, setBackgroundImage] = useState("")

  useEffect(() => {
    setLoading(true)
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKeyWeather}&units=metric`

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
        setCityData(data)
        const weatherCondition = data.weather[0].main
        setBackgroundImage(weatherBackgrounds[weatherCondition] || "")
        setLoading(false)
      })
      .catch((err) => {
        setError("Errore nel fetch del meteo: " + err.message)
        setLoading(false)
      })
  }, [cityName])

  useEffect(() => {
    const imageURL = `https://api.pexels.com/v1/search?query=${cityName}&per_page=1`

    fetch(imageURL, {
      headers: {
        Authorization: apiKeyPexels,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCityImage(
          data.photos[0]?.src?.large || "https://via.placeholder.com/600"
        )
      })
      .catch((err) => {
        setCityImage("https://placedog.net/400x00")
      })
  }, [cityName])

  return (
    <Container
      fluid
      className="d-flex justify-content-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <Alert variant="danger" className="mt-5">
          {error}
        </Alert>
      ) : (
        <Row className="justify-content-center">
          <h1 className="text-center text-dark">Meteo di: {cityData.name}</h1>
          <Col md={6}>
            <Card className="bg-dark text-white text-center fs-5">
              <Card.Img
                variant="top"
                src={cityImage}
                alt={cityData.weather[0].description}
              />
              <Card.Body>
                <Card.Title>{cityData.name}</Card.Title>
                <Card.Text>
                  <i className="bi bi-thermometer-half"></i> Temperatura:{" "}
                  {cityData.main.temp}°C
                </Card.Text>
                <Card.Text>
                  <i className="bi bi-clouds-fill"></i>{" "}
                  {cityData.weather[0].description}
                </Card.Text>
                <Card.Text>
                  <i className="bi bi-cloud-fog"></i> Umidità:{" "}
                  {cityData.main.humidity}%
                </Card.Text>
                <Card.Text>
                  <i className="bi bi-wind"></i> Vento: {cityData.wind.speed}{" "}
                  m/s
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="text-center mt-4">
            <Link to="/" className="btn btn-primary">
              Torna alla Home
            </Link>
          </Col>
          <PrevisioniGiorno city={cityName} />
        </Row>
      )}
    </Container>
  )
}

export default CityDetails
