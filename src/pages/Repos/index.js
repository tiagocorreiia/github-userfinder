import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Container, Row, Col, Button } from 'react-bootstrap'
import Header from '../../components/Header'
import RepoLIst from '../../components/RepoList'

import './styles.scss'

const Repos = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <Fragment>
      <Header />
      <section className="repos">
        <Container>
          <Row>
            <Col>
              <h2>Repo</h2>
            </Col>
          </Row>
          <Row>
            {user.length !== 0 ? (
              <RepoLIst />
            ) : (
              <Col>
                <p>Nenhum repo, voltar a home e fazer nova pesquisa!</p>
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

export default Repos
