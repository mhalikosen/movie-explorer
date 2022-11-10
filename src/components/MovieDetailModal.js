import useGetMovie from '../hooks/useGetMovie'

const MovieDetailModal = ({ imdbID }) => {
  const movie = useGetMovie(imdbID)
  console.log(movie)
  return <div className=""></div>
}

export default MovieDetailModal
