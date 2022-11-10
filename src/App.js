import { Helmet } from 'react-helmet'

const App = () => {
  return (
    <>
      <Helmet>
        <body className="min-h-full bg-gradient-to-r from-cyan-500 to-blue-500" />
      </Helmet>
      <div className="container mx-auto max-w-2xl">
        <div className="m-5 p-1 shadow">
          <input className="bg-transparent focus:border-0 focus:ring-0 w-full h-full" type="text" />
        </div>
        <div>sonuçlar</div>
      </div>
    </>
  )
}

export default App
