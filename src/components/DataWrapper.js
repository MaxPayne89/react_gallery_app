import React, {createContext} from 'react'
import {useFetchPhotos} from '../hooks/useFetchPhotos'
import apiKey from '../config'


export const PhotoContext = createContext({})

const DataWrapper = ({children}) => {

  const [{data, isLoading, isError}, doFetch] = useFetchPhotos(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunset&per_page=24&format=json&nojsoncallback=1`,[])
  return (
    <PhotoContext.Provider value={{ data, isError, isLoading, doFetch}} >
      {children}
    </PhotoContext.Provider>
  )
}

export default DataWrapper