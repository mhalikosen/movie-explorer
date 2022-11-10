import useGetMovie from '../hooks/useGetMovie'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDetailModal = () => {
  const navigate = useNavigate()

  const { imdbID } = useParams()
  if (!imdbID) navigate('/')

  const movie = useGetMovie(imdbID)

  return <div className="">{JSON.stringify(movie)}</div>
}

export default MovieDetailModal
