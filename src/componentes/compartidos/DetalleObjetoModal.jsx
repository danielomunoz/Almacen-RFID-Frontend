import { useState } from 'react'
import './DetalleObjetoModal.css'


function DetalleObjetoModal({objeto}) {
  
  return (
    <div className="modal fade" id="verObjetoModal" tabIndex="-1" aria-labelledby="verObjetoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="verObjetoModalLabel">Detalle de objeto</h5>
            </div>
            <div className="modal-body">
                <div className='avatar mb-3'>
                    <img src="..." alt="Mi imagen" className="img-thumbnail" />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={objeto.nombre} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Familia</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={objeto.familia} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Categoría</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={objeto.categoria} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Subcategoría</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={objeto.subcategoria} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Número de serie</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={objeto.numero_serie} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Estado en almacén</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={objeto.estado_en_almacen} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Código RFID del Propietario del objeto</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={objeto.propietario.codigo_rfid} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Localización</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={objeto.localizacion} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Código RFID</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={objeto.codigo_rfid} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Estado del objeto</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={objeto.estado_objeto} disabled />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DetalleObjetoModal
