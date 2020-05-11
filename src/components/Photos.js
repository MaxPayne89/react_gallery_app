import React, {useState, useEffect } from 'react'
import * as axios from 'axios'
import {Photo} from '../components'
import { Loading } from './Loading'
import {Error} from './Error'
import { NotFound } from './NotFound'
import apiKey from '../config'
import { useParams } from 'react-router-dom'

export const Photos = () => {
  //making use of the hooks provided by react and react-router
  let { search } = useParams()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    //async function which will fetch the data based on the search term
    const fetchPhotos = async () => {
      try {
        const result = await axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
        setData(result.data.photos.photo)
        setIsLoading(false)
      } catch(error) {
        setIsError(true)
        setIsLoading(false)
      }
    }
    fetchPhotos()
  },[search])

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <Error />
  ) : data.length > 0 ?
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
