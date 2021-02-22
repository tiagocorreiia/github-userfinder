import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { getUser } from '../../store'

import UserInfo from '../UserInfo'

import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Modal,
} from 'react-bootstrap'

import './styles.scss'

const Search = () => {
  const dispatch = useDispatch()
  const [repoName, setRepoName] = useState('')
  const [show, setShow] = useState(false)

  const { user } = useSelector((state) => state.user)

  const handleClose = () => setShow(false)

  async function getUserRepo() {
    await axios
      .get(`https://api.github.com/users/${repoName}`)
      .then((res) => {
        dispatch(getUser(res.data))
      })
      .catch((error) => {
        setShow(true)
      })
  }

  return (
    <section className="search">
      <Container>
        <Row>
          <Col>
            <InputGroup
              className="mb-6"
              onChange={(e) => setRepoName(e.target.value)}
            >
              <FormControl
                placeholder="GitHub User Name"
                aria-label="GitHub User Name"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button className="btn primary" onClick={() => getUserRepo()}>
                  Find
                </Button>
              </InputGroup.Append>
            </InputGroup>
            {user.length !== 0 ? <UserInfo /> : ''}
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>User Not Found!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  OK
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Search
