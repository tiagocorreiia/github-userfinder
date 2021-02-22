import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Container, Row, Col, Button } from 'react-bootstrap'

import Header from '../../components/Header'
import StarredList from '../../components/StarredList'

import './styles.scss'

const Starred = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <Fragment>
      <Header />
      <section className="starred">
        <Container>
          <Row>
            <Col>
              <h2>Starred</h2>
            </Col>
          </Row>
          <Row>
            {user.length !== 0 ? (
              <StarredList />
            ) : (
              <Col>
                <p>Nenhuma starred, voltar a home e fazer nova pesquisa!</p>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Starred
