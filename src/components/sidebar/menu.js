import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"
import "./menu.css"
import { Dropdown } from "react-bootstrap"

export default () => (
  <div className="navigation">
    <Nav className="flex-column">
      <Nav.Item>
        <Link to="/">HOME</Link>
      </Nav.Item>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle
            className="text-white"
            id="dropdown-basic sidemenu-toggle"
          >
            SURGERY
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about-us">DOCTORS</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/">TELEMEDICINE</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/blog">HOSPITAL TOUR</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about-us">CONTACT</Link>
      </Nav.Item>
    </Nav>
  </div>
)
