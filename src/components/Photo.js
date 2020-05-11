import React from 'react'
//desctructure the props
export const Photo = ({ farmId, server, id, secret, title}) => {
  const url = `https://farm${farmId}.staticflickr.com/${server}/${id}_${secret}.jpg`

  return (
    <li>
      <img
        src={url}
        alt={title}
       />
    </li>
  )
}
