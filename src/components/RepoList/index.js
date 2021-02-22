import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { FaBox } from 'react-icons/fa'

import { ListGroup } from 'react-bootstrap'

const RepoLIst = () => {
  const { user } = useSelector((state) => state.user)

  const [repo, setRepo] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user.login}/repos`)
      .then((res) => {
        setRepo(res.data)
      })
      .catch((error) => {
        console.log('Erro na url')
      })
  }, [])

  return (
    <ListGroup>
      {repo.map((repo) => (
        <ListGroup.Item
          key={repo.id}
          action
          href={repo.html_url}
          target="_blank"
        >
          <FaBox />
          {repo.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default RepoLIst
