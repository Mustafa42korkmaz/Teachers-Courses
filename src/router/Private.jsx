import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
  const user = true

  return (
    <div>
      {user ? <Outlet/> : <Navigate to="/contact" />}
    </div>
  )
}

export default Private