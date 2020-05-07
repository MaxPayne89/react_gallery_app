import React from 'react'
import { NavButton } from './NavButton'

export const Nav = () => {
  return (
    <div className="main-nav" >
      <ul>
        <li>
          <NavButton queryUrl="dogs" />
        </li>
        <li>
          <NavButton queryUrl="cats" />
        </li>
        <li>
          <NavButton queryUrl="dinosaurs" />
        </li>
      </ul>
    </div>
  )
}
