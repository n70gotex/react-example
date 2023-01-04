import React from 'react'
import { Outlet } from 'react-router-dom';
import NavPaginas from '../pages/paginas/NavPaginas';


function LayoutPaginas() {
  return (
    <>
    <NavPaginas />
    <main>
      <Outlet />
    </main>
    </>
 
  )
}

export default LayoutPaginas