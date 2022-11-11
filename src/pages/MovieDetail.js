import { Link, useNavigate, useParams } from 'react-router-dom'

import useGetMovie from '../hooks/useGetMovie'

const MovieDetailModal = () => {
  const navigate = useNavigate()

  const { imdbID } = useParams()
  if (!imdbID) navigate('/')

  const { Poster, Title, Year, Country, Language, Writer, Director, Actors, imdbRating, BoxOffice, Plot } = useGetMovie(imdbID)

  return (
    <>
      <div className="m-5 mt-10">
        <div class="overflow-hidden bg-white shadow sm:rounded-lg">
          <div class="flex flex-col-reverse items-center justify-between gap-5 px-4 py-5 sm:flex-row sm:px-6 ">
            <div>
              <h3 class="text-lg font-medium leading-6 text-gray-900">{Title}</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                {Year}, {Country}
              </p>
            </div>
            <div style={{ backgroundImage: `url('${Poster}')` }} className="h-60 w-40 bg-contain bg-center bg-no-repeat"></div>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500"> Dil</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{Language}</dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Yazar</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{Writer}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Yönetmen</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{Director}</dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Oyuncular</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{Actors}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">IMDB Puanı</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <Link className="flex items-center gap-1 text-blue-700" to={`//www.imdb.com/title/${imdbID}`} target="_blank">
                    {imdbRating}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block h-4 w-4">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </Link>
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Hasılat</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{BoxOffice}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Hakkında</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{Plot}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <a className="fixed left-8 bottom-8 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/75 transition-all duration-300 hover:translate-x-1 hover:bg-blue-500" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
      </a>
    </>
  )
}

export default MovieDetailModal
