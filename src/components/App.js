import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import notFound from '../images/notfound.svg'

import Home from './Home'
class App extends Component {
  render () {
    return (
      <div className='main-container'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Agatha I</title>
          <link rel='canonical' href='http://agathaprimera.com' />
        </Helmet>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route render={() => {
              return (
                <div className='not-found-container'>
                  <p className='nf-text'>Page Not Found</p>
                  <img className='not-found-img' src={notFound} alt='Not Found' />
                </div>
              )
            }} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
