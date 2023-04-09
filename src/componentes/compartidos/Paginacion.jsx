import { useState } from 'react'
import './Paginacion.css'


function Paginacion() {
  
  return (
    <nav className="pagination-container" aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex="-1">&larr;</a>
        </li>
        <li className="page-item active"><input type="email" className="form-control pagination-form" id="exampleFormControlInput1" placeholder="Página 1 de 10" /></li>
        <li className="page-item">
          <a className="page-link" href="#">&rarr;</a>
        </li>
      </ul>
      <button type="button" className="btn btn-sm btn-outline-warning">Ir a página</button>
    </nav>
  )
}

export default Paginacion
