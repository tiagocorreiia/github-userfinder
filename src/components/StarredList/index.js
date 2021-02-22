import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'

import { ListGroup } from 'react-bootstrap'

const StarredList = () => {
  const { user } = useSelector((state) => state.user)
  const [starred, setStarred] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user.login}/starred`)
      .then((res) => {
        setStarred(res.data)
      })
      .catch((error) => {
        console.log('Erro na url')
      })
  }, [])

  return (
    <ListGroup>
      {starred.map((starred) => (
        <ListGroup.Item
          key={starred.id}
          action
          href={starred.html_url}
          target="_blank"
        >
          <FaStar />
          {starred.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default StarredList
