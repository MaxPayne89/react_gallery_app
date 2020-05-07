import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DataWrapper from './components/DataWrapper'
import {Header, Photos} from './components'

export const App = () => {
  return (
    <DataWrapper>
        <Router>
          <Switch>

            <Route exact path="/">
              <Header />
              <Photos />
            </Route>

          </Switch>
        </Router>
      </DataWrapper>
  )
}

export default App