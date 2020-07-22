import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

const BackToTop = () => {
  return (
    <Container>
      <Row className="px-3">
        <Col md={8}></Col>
        <Col md={4} className="mt-3 mb-4 no-gutters px-0">
          <h3>
            <span className="btt-btn">
              <Link to="/tplo">Back to Top</Link>
            </span>
          </h3>
        </Col>
      </Row>
    </Container>
  )
}

export default BackToTop
