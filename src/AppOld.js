import React, {Fragment, useState } from 'react'
import {useFetchPhotos} from './hooks/useFetchPhotos'
import apiKey from './config'

const App = () => {
  const [query, setQuery] = useState('sunset')
  const [{data, isLoading, isError}, doFetch] = useFetchPhotos(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunset&per_page=24&format=json&nojsoncallback=1`,[])

  return (
    <Fragment>
      <div className="photo-container">
        <form
          onSubmit={(event) => {
            doFetch(
              `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
            )
            event.preventDefault()
            }}>
          <input 
            type="text"
            value={query}
            onChange={ event => setQuery(event.target.value)}
          />
          <button type="button">
            Search, bruv
          </button>
        </form>
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