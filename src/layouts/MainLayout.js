import { Helmet } from 'react-helmet'

import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Helmet>
        <body className="min-h-full bg-gradient-to-r from-cyan-500 to-blue-500" />
      </Helmet>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
