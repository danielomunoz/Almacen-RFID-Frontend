import { useState } from 'react'
import './PrincipalPagina.css'

import Navbar from '../compartidos/Navbar';
import Titulo from '../compartidos/Titulo';
import Grid from '../compartidos/Grid';
import Footer from '../compartidos/Footer';

function PrincipalPagina() {
  
  return (
    <>
      <Navbar />
      <Titulo />
      <Grid />
      <Footer />
    </>
  )
}

export default PrincipalPagina
