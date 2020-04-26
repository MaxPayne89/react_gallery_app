import React from 'react'
import {useFetch} from '../hooks/useFetch'

export const Photos = () => {
  const data = useFetch()

  return (
    <div className="photo-container">
      <ul>
      </ul>
    </div>
  )
}
