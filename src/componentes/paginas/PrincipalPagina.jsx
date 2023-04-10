import { useState, useEffect } from 'react'
import './PrincipalPagina.css'

import Navbar from '../compartidos/Navbar';
import Titulo from '../compartidos/Titulo';
import Grid from '../compartidos/Grid';
import Footer from '../compartidos/Footer';
import Rastreo from '../compartidos/Rastreo';
import Paginacion from '../compartidos/Paginacion';


function PrincipalPagina({path}) {

  const [titulo, setTitulo] = useState('Objetos');

  useEffect(() => {
    if (path === '/objetos') setTitulo('Objetos');
    if (path === '/rastreo') setTitulo('Rastreo');
    if (path === '/mis-objetos') setTitulo('Mis objetos');
  }, []);
  
  return (
    <>
      <div className='main-container'>
        <div className='main-page-main-container'>
          <Navbar activeLink={path}/>
          <Titulo titulo={titulo} />
          {
            path === '/rastreo'
              ?
                <Rastreo />
              :
                <Grid />
          }
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
