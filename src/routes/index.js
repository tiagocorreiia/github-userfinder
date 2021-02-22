import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import User from '../pages/User'
import Repos from '../pages/Repos'
import NotFound from '../pages/NotFound'
import Starred from '../pages/Starred'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/:login" exact component={User} />
        <Route path="/user/:login/repos" exact component={Repos} />
        <Route path="/user/:login/starred" exact component={Starred} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
