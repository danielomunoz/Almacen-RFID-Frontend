import { useState } from 'react'
import './Navbar.css'


function Navbar() {
  
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Almacén RFID</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Rastreo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Objetos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Mi Perfil</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item display-on-small-devices">
                        <a class="nav-link" href="#">Filtrar</a>
                    </li>
                    <li class="nav-item display-on-small-devices">
                        <a class="nav-link" href="#">Registrar objeto</a>
                    </li>
                    <li class="nav-item display-on-small-devices">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
                <div class="navbar-buttons-container">
                    <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#filtrosModal">Filtrar</button>
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#registroObjetoModal">Registrar objeto</button>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#logoutModal">Logout</button>
                </div>
            </div>
        </div>
      </nav>
      <div class="modal fade" id="filtrosModal" tabindex="-1" aria-labelledby="filtrosModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="filtrosModalLabel">Filtros</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-warning">Aplicar filtros</button>
            </div>
            </div>
        </div>
      </div>
      <div class="modal fade" id="registroObjetoModal" tabindex="-1" aria-labelledby="registroObjetoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="registroObjetoModalLabel">Registro de Objeto</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-warning">Registrar objeto</button>
            </div>
            </div>
        </div>
      </div>
      <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="logoutModalLabel">¿Está seguro?</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-danger">Sí, cerrar sesión</button>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
