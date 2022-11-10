import { useState, useEffect } from 'react'

import searchMovies from '../utils/searchMovies'

const useSearchMovies = (search) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (search) {
      searchMovies(search).then(setMovies).catch(console.error)
    }
  }, [search])

  return movies
}

export default useSearchMovies
