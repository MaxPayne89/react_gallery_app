import React, {useState, useEffect, useReducer} from 'react'
import * as axios from 'axios'
import {Photo} from '../components'
import { Loading } from './Loading'
import {Error} from './Error'
import { NotFound } from './NotFound'
import apiKey from '../config'
import { useFetchPhotos } from '../hooks/useFetchPhotos'
import { useParams } from 'react-router-dom'

export const Photos = () => {
  let { search } = useParams()

  


  const [{data, isLoading, isError}, setUrl] = useFetchPhotos(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`,[]) 
  //setUrl(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <Error />
  ) : data ?
  (
    <div className="photo-container">
      <ul>
      {data.map( (photo, index) => {
        return (
          <Photo 
            farmId={photo.farm}
            key={index}
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
