import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export const NavButton = ({ queryUrl }) => {
  return (
    <div>
      <Link to={`/${queryUrl}`} >
        <button>
          <p>{queryUrl.toUpperCase()}</p>
        </button>
      </Link>
    </div>
  )
}
