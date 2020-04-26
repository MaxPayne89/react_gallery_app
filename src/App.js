import React, {Fragment, useState, useEffect} from 'react'
import apiKey from './config'
import * as axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('sunset')
  const [url, setUrl] = useState(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunset&per_page=24&format=json&nojsoncallback=1`
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const result = await axios(url)
        setData(result.data.photos.photo)
        setIsLoading(false)
      } catch(error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchPhotos()
  }, [url])


  console.log(data)
  return (
    <Fragment>
      <div className="photo-container">
        <input 
          type="text"
          value={query}
          onChange={ event => setQuery(event.target.value)}
        />
        <button type="button" onClick={() => 
          setUrl(
            `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
          )} 
        >
          Search, bruv
        </button>

        {isError && <div>Something went wrong, bruv...</div>}

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {data.map(photo => (
              <li key={photo.id}>
                <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={`${photo.title}`} />
              </li>
            ))}
          </ul>
        )
        }
      </div>
    </Fragment>
  )
}

export default App