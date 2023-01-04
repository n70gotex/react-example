import React from 'react';
import { Outlet } from 'react-router-dom';
import NavPc from '../components/NavPc';
import NavSmart from '../components/NavSmart';
import Footer from '../components/Footer';



function LayoutPublic() {
  return (
    <>
    <NavPc />
    <NavSmart />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
    
  )
}

export default LayoutPublic