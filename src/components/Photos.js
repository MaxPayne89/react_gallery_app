import React, {useContext} from 'react'
import {Photo} from '../components'
import {PhotoContext} from './DataWrapper'
import { Loading } from './Loading'
import {Error} from './Error'
import { NotFound } from './NotFound'

export const Photos = () => {
  const {data, isLoading, isError} = useContext(PhotoContext)

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <Error />
  ) : data ?
  (
    <div className="photo-container">
      <ul>
      {data.map( photo => {
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
  ) : (
    <NotFound />
  )
}


      {/*
    <div className="photo-container">
      <ul>
      {data.map( photo => {
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
  */}