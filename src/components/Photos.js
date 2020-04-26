import React from 'react'
import {Photo} from './Photo'

export const Photos = ({ data }) => {
  /*
  let photos = data.photos.photos.map( photo => {
    return (
      <Photo 
        farmId={photo.farm}
        key={photo.owner}
        secret={photo.secret}
        title={photo.title}
        id={photo.id}
        server={photo.server}
      />
    )
  })
  */

  return (
    <div className="photo-container">
      <ul>
      {data.photos.photos.map( photo => {
        return (
          <Photo 
            farmId={photo.farm}
            key={photo.owner}
            secret={photo.secret}
            title={photo.title}
            id={photo.id}
            server={photo.server} 
            /> 
           )
        })
      }
      </ul>
    </div>
  )
}
