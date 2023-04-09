import { useState } from 'react'
import './Rastreo.css'

import RastreoFila from './RastreoFila';
import DetalleObjetoModal from './DetalleObjetoModal';
import DetallePersonaModal from './DetallePersonaModal';


function Rastreo() {

  const [filas, setFilas] = useState(['', '', '', '']);
  
  return (
    <>
        <div className='tabla-rastreo-container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    { filas.map((fila, indice) => <RastreoFila key={fila + indice} />) }
                </tbody>
            </table>
        </div>
        <DetalleObjetoModal />
        <DetallePersonaModal />
    </>
  )
}

export default Rastreo
