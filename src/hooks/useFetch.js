import {useState, useEffect} from 'react'
import * as axios from 'axios'

export const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true)
        const response = await axios(url)
        if(response.status === 200){
          setData(response.data)
        }
      } catch (error){
        throw error
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  },[])

  return data
}
