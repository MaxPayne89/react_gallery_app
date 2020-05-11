import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DataWrapper from './components/DataWrapper'
import {Header, Photos} from './components'

export const App = () => {
  return (
      <div className="container">
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Photos />
            </Route>

            <Route path="/:search">
              <Photos />
            </Route>
          </Switch>
        </Router>
        </div>
  )
}

export default App