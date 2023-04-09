import { useState } from 'react'
import './PrincipalPagina.css'

import Navbar from '../compartidos/Navbar';
import Titulo from '../compartidos/Titulo';
import Grid from '../compartidos/Grid';
import Footer from '../compartidos/Footer';
import Rastreo from '../compartidos/Rastreo';
import Paginacion from '../compartidos/Paginacion';


function PrincipalPagina() {
  
  return (
    <>
      <div className='main-container'>
        <div className='main-page-main-container'>
          <Navbar />
          <Titulo />
          {/*<Grid />*/}
          {<Rastreo />}
        </div>
        <div className='main-page-footer-container'>
          <Paginacion />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default PrincipalPagina
