import { useState, useEffect } from 'react'
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import './App.css'

import PrincipalPagina from './componentes/paginas/PrincipalPagina';
import LoginPagina from './componentes/paginas/LoginPagina';

function App() {

  const [estoyAutenticado, setEstoyAutenticado] = useState(true);
  const location = useLocation();
  // const query = useLocation().search;
  // console.log(location.pathname);
  // console.log(query);
  
  return (
    <>
      {
        estoyAutenticado
          ?
            <Routes>
              <Route path="/objetos" element={<PrincipalPagina path={location.pathname} autenticado={setEstoyAutenticado} />} />
              <Route path="/rastreo" element={<PrincipalPagina path={location.pathname} autenticado={setEstoyAutenticado} />} />
              <Route path="/mis-objetos" element={<PrincipalPagina path={location.pathname} autenticado={setEstoyAutenticado} />} />
              <Route path="*" element={<Navigate to="/objetos" />} />
            </Routes>
          :
            <Routes>
              <Route path="/login" element={<LoginPagina autenticado={setEstoyAutenticado} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
      }
    </>
  )
}

export default App
