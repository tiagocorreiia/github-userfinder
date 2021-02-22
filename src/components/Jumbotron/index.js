import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Jumbotron, Button } from 'react-bootstrap'

const JumbotronCard = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <Jumbotron>
      <h1> {user.name} </h1>
      <p> {user.bio} </p>
      <div>
        <Link to={`/user/${user.login}/repos`}>
          <Button variant="primary">See Repos</Button>
        </Link>
        <Link to={`/user/${user.login}/starred`}>
          <Button variant="primary">See Starred</Button>
        </Link>
      </div>
    </Jumbotron>
  )
}

export default JumbotronCard
