import React from 'react'
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <div>
      <h1>NotFound ERROR 404</h1>
      <Link to="/Home">Volver al inicio</Link>

    </div>
  )
}

export default NotFound