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
    if (path === '/objetos') {
      setTitulo('Objetos');
      axios.get("http://127.0.0.1:8000/api/objeto")
      .then(res => {
        setObjetos(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
        setObjetos([]);
      });
    }
    if (path === '/rastreo') {
      setTitulo('Rastreo');
      axios.get("http://127.0.0.1:8000/api/accion")
      .then(res => {
        setAcciones(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
        setAcciones([]);
      });
    }
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
                <Rastreo acciones={acciones} />
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
