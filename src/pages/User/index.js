import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Header from '../../components/Header'
import JumbotronCard from '../../components/Jumbotron'

import './styles.scss'

const User = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <div className="user">
      <Header />
      <div className="user__content">
        <Container>
          <Row>
            <Col md={4}>
              <img className="img-fluid" src={user.avatar_url} alt="" />
            </Col>
            <Col md={8}>
              {user.length !== 0 ? (
                <JumbotronCard />
              ) : (
                <Col>
                  <p>Nenhum usuário, voltar a home e fazer nova pesquisa!</p>
                  <Link to="/">
                    <Button>Home</Button>
                  </Link>
                </Col>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default User
