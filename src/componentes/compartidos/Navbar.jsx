import { useState } from 'react'
import './Navbar.css'


function Navbar() {
  
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Almacén RFID</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Rastreo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Objetos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mi Perfil</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item display-on-small-devices">
                        <a className="nav-link" href="#">Filtrar</a>
                    </li>
                    <li className="nav-item display-on-small-devices">
                        <a className="nav-link" href="#">Registrar objeto</a>
                    </li>
                    <li className="nav-item display-on-small-devices">
                        <a className="nav-link" href="#">Logout</a>
                    </li>
                </ul>
                <div className="navbar-buttons-container">
                    <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#filtrosModal">Filtrar</button>
                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#registroObjetoModal">Registrar objeto</button>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#logoutModal">Logout</button>
                </div>
            </div>
        </div>
      </nav>
      <div className="modal fade" id="filtrosModal" tabIndex="-1" aria-labelledby="filtrosModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="filtrosModalLabel">Filtros</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                ...
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-warning">Aplicar filtros</button>
            </div>
            </div>
        </div>
      </div>
      <div className="modal fade" id="registroObjetoModal" tabIndex="-1" aria-labelledby="registroObjetoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="registroObjetoModalLabel">Registro de Objeto</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                ...
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-warning">Registrar objeto</button>
            </div>
            </div>
        </div>
      </div>
      <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="logoutModalLabel">¿Está seguro?</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-danger">Sí, cerrar sesión</button>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
