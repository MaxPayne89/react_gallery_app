import {useEffect, useState, useReducer} from 'react'
import * as axios from 'axios'
      //`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunset&per_page=24&format=json&nojsoncallback=1`
const dataFetchReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_INIT':
      return {...state,
        isLoading: true,
        isError: false
      }
    case 'FETCH_SUCCESS':
      return {...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case 'FETCH_FAILURE':
      return {...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}


export const useFetchPhotos = (initialUrl, initialData) => {
 //const [data, setData] = useState(initialData)
 const [url, setUrl] = useState(initialUrl)
 // const [isLoading, setIsLoading] = useState(false)
 // const [isError, setIsError] = useState(false)
 const [state, dispatch] = useReducer(dataFetchReducer, {
   isLoading: false,
   isError: false,
   data: initialData,
 })

    useEffect(() => {
      let didCancel = false
      const fetchPhotos = async () => {
        //setIsError(false)
        //setIsLoading(true)
        dispatch({ type: 'FETCH_INIT' })
        try {
          const result = await axios(url)
          //setData(result.data.photos.photo)
          //setData(result.data)
          //setIsLoading(false)
          if(!didCancel){
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data.photos.photo})
          }
        } catch(error) {
          //setIsError(true)
          if(!didCancel){
            dispatch({ type: 'FETCH_FAILURE' })
          }
        }
        //setIsLoading(false)
      }
      fetchPhotos()

      return () => {
        didCancel = true
      }
    }, [url])

    //return [{data, isLoading, isError}, setUrl]
    return [state, setUrl]
}
