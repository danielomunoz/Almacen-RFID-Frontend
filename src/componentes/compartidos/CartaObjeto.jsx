import { useState } from 'react'
import './CartaObjeto.css'


function CartaObjeto({objeto, indice, objetoPulsado}) {

  
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>{objeto.nombre}</title><rect width="100%" height="100%" fill="#55595c"/><text x="2%" y="7%" fill="#eceeef" dy=".3em">{objeto.nombre}</text></svg>
        <div className="card-body">
          <p className="card-text">{objeto.descripcion}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-sm btn-outline-warning" data-bs-toggle="modal" data-bs-target="#verObjetoModal" onClick={() => objetoPulsado(indice)}>Ver detalle</button>
            <small className="text-muted">Familia: {objeto.familia}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartaObjeto
