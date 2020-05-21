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
            <Dropdown.Item href="#/action-1">ACL TEARS</Dropdown.Item>
            <Dropdown.Item href="#/action-2">TPLO</Dropdown.Item>
            <Dropdown.Item href="#/action-3">HIP DYSPLASIA</Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              TOTAL HIP REPLACEMENT
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">PATELLA LUXATIONS</Dropdown.Item>
            <Dropdown.Item href="#/action-3">ELBOW DYSPLASIA</Dropdown.Item>
            <Dropdown.Item href="#/action-3">SHOULDER DISORDERS</Dropdown.Item>
            <Dropdown.Item href="#/action-3">FRACTURES</Dropdown.Item>
            <Dropdown.Item href="#/action-3">ARTHROSCOPY</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              INTERVERTEBRAL DISC DISEASE
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle
            className="text-white"
            id="dropdown-basic sidemenu-toggle"
          >
            DOCTORS
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">MIKE BAUER</Dropdown.Item>
            <Dropdown.Item href="#/action-2">TODD RIECKS</Dropdown.Item>
            <Dropdown.Item href="#/action-3">SCOT SWAINSON</Dropdown.Item>
            <Dropdown.Item href="#/action-1">NATE MILLER</Dropdown.Item>
            <Dropdown.Item href="#/action-2">DR. DETORA</Dropdown.Item>
            <Dropdown.Item href="#/action-3">SAM FRANKLIN</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
      <Nav.Item>
        <Link to="/">TELEMEDICINE</Link>
      </Nav.Item>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle
            className="text-white"
            id="dropdown-basic sidemenu-toggle"
          >
            CONTACT
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              MORE SUBMENUS TO COME
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </Nav>
  </div>
)
