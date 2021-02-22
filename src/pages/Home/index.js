import React from 'react'

import Header from '../../components/Header'
import Search from '../../components/Search/Index'

import './styles.scss'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Search />
    </div>
  )
}

export default Home
