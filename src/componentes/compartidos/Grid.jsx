import { useState } from 'react'
import './Grid.css'

import CartaObjeto from './CartaObjeto';
import DetalleObjetoModal from './DetalleObjetoModal';


function Grid() {

  const [objetos, setObjetos] = useState(['', '', '', '', '', '', '', '', '']);
  
  return (
    <>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {
              objetos.map((objeto, indice) => <CartaObjeto key={objeto + indice} />)
            }
          </div>
        </div>
      </div>
      <DetalleObjetoModal />
    </>
  )
}

export default Grid
