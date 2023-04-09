import { useState } from 'react'
import './CartaObjeto.css'


function CartaObjeto() {
  
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="2%" y="7%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        <div className="card-body">
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-sm btn-outline-warning">Ver detalle</button>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartaObjeto
