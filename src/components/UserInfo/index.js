import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Card, Button } from 'react-bootstrap'

import Location from '../../assets/location_icon.svg'

import './styles.scss'

const UserInfo = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <Card>
      <Card.Header> {user.name} </Card.Header>
      <Card.Body>
        <Card.Img src={user.avatar_url} />
        <Card.Title>
          <img src={Location} alt="" /> {user.location}
        </Card.Title>
        <Card.Text> {user.bio} </Card.Text>
        <Link to={`/user/${user.login}`}>
          <Button variant="primary">See more</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default UserInfo
