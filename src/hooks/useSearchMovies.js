import { useState, useEffect } from 'react'

import searchMovies from '../utils/searchMovies'

const useSearchMovies = (search) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    searchMovies(search ? search : 'batman')
      .then(setMovies)
      .catch((error) => {
        setMovies([])
        console.error(error)
      })
  }, [search])

  return movies
}

export default useSearchMovies
