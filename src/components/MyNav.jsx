import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const MyNav = ({ setCityName }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate() // Usa useNavigate per navigare tra le pagine

  // Funzione per gestire il submit del modulo di ricerca
  const handleSearchSubmit = (event) => {
    event.preventDefault() // Evita che la pagina venga ricaricata
    setCityName(searchQuery) // Passa il nome della città alla funzione che aggiorna lo stato
    navigate(`/city/${searchQuery}`) // Reindirizza alla pagina della città usando navigate
  }

  return (
    <Navbar bg="info" data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand href="/">EPIMeteo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Cerca una città"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Gestisce il cambio nel campo di ricerca
            />
            <Button variant="outline-secondary" type="submit">
              Cerca
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
