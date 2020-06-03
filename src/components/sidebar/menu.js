import React from "react"
import { Link } from "gatsby"
import { Nav, Accordion, Card } from "react-bootstrap"
import Logo from "../../images/logo.png"
import Search from "../search"
import Searchicon from "../../images/searchcon.png"
import "./menu.scss"

const allSitePage = {
  edges: [
    {
      node: {
        id: "SitePage /404/",
        title: "404",
        path: "/404",
      },
    },
    {
      node: {
        id: "SitePage /about-us/",
        title: "About Us",
        path: "/about-us",
      },
    },
    {
      node: {
        id: "SitePage /contact/",
        title: "Contact Us",
        path: "/contact",
      },
    },
  ],
}

export default () => (
  <div className="navigation">
    <Nav className="flex-column">
      <img
        src={Logo}
        className="img-fluid logo mb-4"
        alt="Colorado Canine Orthopedics"
      />
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="surgery">
            Surgery
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="surgery">
            <Card.Body>
              <Nav.Item>
                <Link to="/acl-tears">ACL Tears</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">TPLO</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Hip Dysplasia</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Total Hip Replacement</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Patella Luxations</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Elbow Dysplasia</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Shoulder Disorders</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Fractures</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Arthrocospy</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Intervertebral Disc Disease</Link>
              </Nav.Item>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="doctors">
            Doctors
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="doctors">
            <Card.Body>
              <Nav.Item>
                <Link to="/">Mike Bauer</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Todd Riecks</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Scot Swainson</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Nate Miller</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Dr. Detora</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Sam Franklin</Link>
              </Nav.Item>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Nav.Item>
          <Link to="/">Telemedicine</Link>
        </Nav.Item>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="contact">
            Contact
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="contact">
            <Card.Body>
              <Nav.Item>
                <Link to="/">More submenus to come</Link>
              </Nav.Item>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Nav>
    <div className="header-search mt-5">
      <img className="search-icon" src={Searchicon} alt="" />
      <Search data={allSitePage} />
    </div>
  </div>
)
