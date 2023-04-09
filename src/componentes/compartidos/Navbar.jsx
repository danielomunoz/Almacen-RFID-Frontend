import { useState } from 'react'
import './Navbar.css'

import MiPerfilModal from './MiPerfilModal'
import FiltrosGridModal from './FiltrosGridModal'
import RegistrarObjetoModal from './RegistrarObjetoModal'
import LogoutModal from './LogoutModal'


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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mi perfil
                        </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#miPerfilModal">Información</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Mis objetos</a></li>
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
      <FiltrosGridModal />
      <RegistrarObjetoModal />
      <LogoutModal />
      <MiPerfilModal />
    </>
  )
}

export default Navbar
