import axios from './axios'

const searchMovies = (imdbID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${imdbID}`)
      resolve(res.data)
    } catch (error) {
      reject(error)
    }
  })
}

export default searchMovies
