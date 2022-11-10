import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

const App = () => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <>
      <Helmet>
        <body className="min-h-full bg-gradient-to-r from-cyan-500 to-blue-500" />
      </Helmet>
      <div className="container mx-auto max-w-2xl">
        <div className="m-5 rounded bg-blue-100 bg-blend-darken shadow">
          <input
            placeholder="Filmlerde arayın...  (Batman)"
            className="m-0 h-full w-full border-0 bg-transparent p-5 text-lg font-bold placeholder:text-base placeholder:font-bold placeholder:text-slate-600 focus:border-0 focus:ring-0"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>sonuçlar</div>
      </div>
    </>
  )
}

export default App
