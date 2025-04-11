import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MeteoGallery from "./components/MeteoGallery"
import CityDetails from "./components/CityDetails"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Notizia1 from "./components/Notizia1"
import Notizia2 from "./components/Notizia2"
import InfiniteScroll from "./components/InfiniteScroll"
import "./App.css"

const App = () => {
  const [cityName, setCityName] = useState("")
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <MyNav setCityName={setCityName} />
        <div className="flex-grow-1">
          <InfiniteScroll />
          <Routes>
            <Route path="/" element={<MeteoGallery />} />
            <Route path="/city/:cityName" element={<CityDetails />} />
            <Route path="/news/1" element={<Notizia1 />} />
            <Route path="/news/2" element={<Notizia2 />} />
          </Routes>
        </div>
        <MyFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
