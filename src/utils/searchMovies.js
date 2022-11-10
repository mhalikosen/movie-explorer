import axios from './axios'

const searchMovies = (search) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${search}`)
      if (res.data.Search) {
        const movies = Object.values(res.data.Search)
        resolve(movies)
      } else {
        reject('Aramanıza uygun bir film bulunamadı.')
      }
    } catch (error) {
      reject(error)
    }
  })
}

export default searchMovies
