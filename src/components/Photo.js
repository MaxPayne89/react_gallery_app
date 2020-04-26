import React from 'react'

export const Photo = ({ farmId, server, id, secret, title}) => {
  const url = `https://farm${farmId}.staticflickr.com/${server}/${id}_${secret}.jpg`

  return (
    <div className="photo">
      <img
        src={url}
        alt={title}
       />
    </div>
  )
}
