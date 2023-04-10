import { useState, useEffect } from 'react'
import axios from 'axios'
import './PrincipalPagina.css'

import Navbar from '../compartidos/Navbar';
import Titulo from '../compartidos/Titulo';
import Grid from '../compartidos/Grid';
import Footer from '../compartidos/Footer';
import Rastreo from '../compartidos/Rastreo';
import Paginacion from '../compartidos/Paginacion';


function PrincipalPagina({path}) {

  const [titulo, setTitulo] = useState('Objetos');
  const [objetos, setObjetos] = useState([]);
  const [acciones, setAcciones] = useState([]);

  useEffect(() => {
    if (path === '/objetos') setTitulo('Objetos');
    if (path === '/rastreo') setTitulo('Rastreo');
    if (path === '/mis-objetos') setTitulo('Mis objetos');

    axios.get("http://127.0.0.1:8000/api/objeto")
      .then(res => {
        setObjetos(res.data.payload);
        // if (res.data.ok) console.log(res.data.payload);
      })
      .catch((err) => console.log(err));
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
                <Grid objetos={objetos} />
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
