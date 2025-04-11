import React, { useState, useEffect } from "react"
import { Card, Row, Col } from "react-bootstrap"

const PrevisioniGiorni = ({ city }) => {
  const [forecastData, setForecastData] = useState([])
  const apiKeyWeather = "089951b9af8656a0e0fd05f84db66d2c"
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKeyWeather}&units=metric`

  useEffect(() => {
    // Fetch per ottenere le previsioni meteo
    fetch(forecastURL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(
            "Errore nella fetch delle previsioni: " + response.statusText
          )
        }
      })
      .then((data) => {
        setForecastData(data.list.slice(0, 5))
      })
      .catch((err) => {
        console.log("Errore nel fetch delle previsioni:", err)
      })
  }, [city])

  return (
    <div className="mt-4 g-3">
      <h3>Previsioni orarie per {city}</h3>
      <Row className="d-flex justify-content-center">
        {forecastData.map((forecast, index) => (
          <Col md={2} key={index} className="text-center">
            <Card>
              <Card.Body>
                <Card.Title>
                  {new Date(forecast.dt * 1000).toLocaleDateString()}{" "}
                  {/* Data */}
                </Card.Title>
                <Card.Text>{forecast.weather[0].description}</Card.Text>
                <Card.Text>Temp: {forecast.main.temp}°C</Card.Text>
                <Card.Text>Orario: {forecast.dt_txt}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PrevisioniGiorni
