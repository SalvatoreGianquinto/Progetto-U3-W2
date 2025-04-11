import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MeteoGallery from "./components/MeteoGallery"
import CityDetails from "./components/CityDetails"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import { Alert } from "react-bootstrap"

const App = () => {
  const [cityName, setCityName] = useState("")
  return (
    <BrowserRouter>
      <MyNav setCityName={setCityName} />
      <Alert className="text-center">
        <h1>Benvenuti in EPIMeteo</h1>
        <p>Qui puoi trovare le notizie del meteo di tutto il mondo</p>
      </Alert>
      <Routes>
        <Route path="/" element={<MeteoGallery />} />
        <Route path="/city/:cityName" element={<CityDetails />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  )
}

export default App
