import { useState } from 'react'
import './MiPerfilModal.css'

import Imagen404 from '../../assets/imagen404.png'


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function parseStringToDate(string) {
    let mydate = new Date(string);
    return `${mydate.toLocaleDateString()}`;
}


function MiPerfilModal({user}) {
  
  return (
    <div className="modal fade" id="miPerfilModal" tabIndex="-1" aria-labelledby="miPerfilModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="miPerfilModalLabel">Mi Perfil</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className='avatar mb-3'>
                    <img src={(user.imagen != null) ? `http://127.0.0.1:8000${user.imagen}` : Imagen404} alt="Mi imagen" className="img-thumbnail" />
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={user.nombre} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={user.email} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Móvil</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={user.movil} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">DNI</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={user.dni} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Código RFID</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={user.codigo_rfid} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Rol</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={capitalizeFirstLetter(user.rol)} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Fecha de registro</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={parseStringToDate(user.fecha_registro)} disabled />
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

export default MiPerfilModal
