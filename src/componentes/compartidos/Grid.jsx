import { useEffect, useState } from 'react'
import './Grid.css'

import CartaObjeto from './CartaObjeto';
import DetalleObjetoModal from './DetalleObjetoModal';


function Grid({objetos}) {

  const [indiceObjetoPulsado, setIndiceObjetoPulsado] = useState(0);
  
  return (
    <>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {
              objetos.map((objeto, indice) => <CartaObjeto key={objeto + indice}
                                                           objeto={objeto}
                                                           indice={indice}
                                                           objetoPulsado={setIndiceObjetoPulsado} />)
            }
          </div>
        </div>
      </div>
      {
        (objetos.length != 0)
          ? <DetalleObjetoModal objeto={objetos[indiceObjetoPulsado]} />
          : null
      }
    </>
  )
}

export default Grid
