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
                    <button type="button" class="btn btn-outline-warning">Filtrar</button>
                    <button type="button" class="btn btn-warning">Registrar objeto</button>
                    <button type="button" class="btn btn-danger">Logout</button>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
