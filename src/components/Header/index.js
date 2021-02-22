import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

import './styles.scss'
import Logo from '../../assets/github_icon.svg'

const Header = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <header>
      <Container>
        <Row>
          <Col>
            <Link to="/">
              <h1>
                <img src={Logo} alt="GitHub Logo" />
                GitHub User Finder
              </h1>
            </Link>
          </Col>
          <Col>
            {user.length !== 0 ? (
              <Link to={`/user/${user.login}`}> {user.login} </Link>
            ) : (
              ''
            )}
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
