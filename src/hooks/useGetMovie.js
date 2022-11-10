import { useState, useEffect } from 'react'

import getMovie from '../utils/getMovie'

const useGetMovie = (imdbID) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    if (imdbID) {
      getMovie(imdbID).then(setMovie).catch(console.error)
    }
  }, [imdbID])

  return movie
}

export default useGetMovie
