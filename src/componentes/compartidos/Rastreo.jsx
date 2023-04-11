import { useEffect, useState } from 'react'
import './Rastreo.css'

import RastreoFila from './RastreoFila';
import DetalleObjetoModal from './DetalleObjetoModal';
import DetallePersonaModal from './DetallePersonaModal';


function Rastreo({acciones}) {

    const [indiceAccionPulsada, setIndiceAccionPulsada] = useState(0);
  
  return (
    <>
        <div className='tabla-rastreo-container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Objeto</th>
                        <th scope="col">Persona</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    { acciones.map((accion, indice) => <RastreoFila key={accion + indice}
                                                                    accion={accion}
                                                                    indice={indice}
                                                                    accionPulsada={setIndiceAccionPulsada} />) }
                </tbody>
            </table>
        </div>
        {
            (acciones.length != 0)
            ? <DetalleObjetoModal objeto={acciones[indiceAccionPulsada].objeto} />
            : null
        }
        {
            (acciones.length != 0)
            ? <DetallePersonaModal persona={acciones[indiceAccionPulsada].persona} />
            : null
        }
    </>
  )
}

export default Rastreo
