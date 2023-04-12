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
  const [filtros, setFiltros] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    if (path === '/objetos') {
      setTitulo('Objetos');
      axios.get(`http://127.0.0.1:8000/api/objeto?p=${paginaActual}` + filtros)
      .then(res => {
        setTotalPaginas(res.data.total_paginas)
        setObjetos(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
        setObjetos([]);
      });
    }
    if (path === '/rastreo') {
      setTitulo('Rastreo');
      axios.get(`http://127.0.0.1:8000/api/accion?p=${paginaActual}` + filtros)
      .then(res => {
        setTotalPaginas(res.data.total_paginas)
        setAcciones(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
        setAcciones([]);
      });
    }
    if (path === '/mis-objetos') {
      setTitulo('Mis objetos');
      axios.get(`http://127.0.0.1:8000/api/misObjetos/a18e32e6-db09-4324-8189-3781d27a1b8c?p=${paginaActual}` + filtros)
      .then(res => {
        setTotalPaginas(res.data.total_paginas)
        setObjetos(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
        setObjetos([]);
      });
    }
  }, [filtros, paginaActual]);
  
  return (
    <>
      <div className='main-container'>
        <div className='main-page-main-container'>
          <Navbar activeLink={path} actualizaFiltros={setFiltros} />
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
          <Paginacion paginaActual={paginaActual} totalPaginas={totalPaginas} cambioPaginaActual={setPaginaActual} />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default PrincipalPagina
