import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
  const user = true

  return (
    <div>
      {user ? <Outlet/> : <Navigate to="/login" />}
    </div>
  )
}

export default Private