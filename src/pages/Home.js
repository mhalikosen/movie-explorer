import { Link } from 'react-router-dom'

import useDebounce from '../hooks/useDebounce'

import useSearchMovies from '../hooks/useSearchMovies'

const Home = () => {
  const [search, setSearch, actualSearch] = useDebounce('')

  const movies = useSearchMovies(search)

  return (
    <div className="container mx-auto max-w-2xl">
      <div className="m-5 rounded bg-blue-100 bg-blend-darken shadow">
        <input
          placeholder="Filmlerde arayın...  (Batman)"
          className="m-0 h-full w-full border-0 bg-transparent p-5 text-lg font-bold placeholder:text-base placeholder:font-bold placeholder:text-slate-600 focus:border-0 focus:ring-0"
          type="text"
          value={actualSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 justify-items-center gap-2">
        {movies &&
          movies.map(({ Poster, Title, imdbID }, index) => (
            <Link
              to={`/detay/${imdbID}`}
              className="flex h-60 w-40 cursor-pointer flex-col items-start justify-end bg-cover bg-center bg-no-repeat drop-shadow transition-all duration-300 hover:scale-105"
              style={{ backgroundImage: `url('${Poster}')` }}
              key={index}
            >
              <div className="w-full bg-gradient-to-t from-black p-2 font-bold text-white drop-shadow-2xl">{Title}</div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Home