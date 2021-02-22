import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Header from '../../components/Header'

import './styles.scss'

const NotFound = () => {
  return (
    <div className="notFound">
      <Header />
      <div>
        <Container>
          <Row>
            <Col>
              <h2>Page Not Found</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default NotFound
