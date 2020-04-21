import React from 'react';
import apiKey from './config'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Photos, Header, Nav, NotFound} from './components'
import './App.scss';

const key = apiKey

function App() {
  return (
    <div className="container">
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
