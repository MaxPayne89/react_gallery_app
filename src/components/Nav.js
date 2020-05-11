import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="main-nav" >
      <ul>
        <li>
          <Link to="/dogs" >Dogs</Link>
        </li>
        <li>
          <Link to="/tigerking" >Tiger King</Link>
        </li>
        <li>
          <Link to="/cats" >Cats</Link>
        </li>
      </ul>
    </nav>
  )
}
