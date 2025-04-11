import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MeteoGallery from "./components/MeteoGallery"
import CityDetails from "./components/CityDetails"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Notizia1 from "./components/Notizia1"
import Notizia2 from "./components/Notizia2"

const App = () => {
  const [cityName, setCityName] = useState("")

  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <MyNav setCityName={setCityName} />

        {/* Contenuto principale che cresce per riempire lo spazio */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<MeteoGallery />} />
            <Route path="/city/:cityName" element={<CityDetails />} />
            <Route path="/news/1" element={<Notizia1 />} />
            <Route path="/news/2" element={<Notizia2 />} />
          </Routes>
        </div>

        {/* Footer sempre in fondo */}
        <MyFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
