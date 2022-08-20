import React from 'react'

const navBar = () => {
    return (
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://mariantonia416.github.io/unlimited-producciones/">Unlimited</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" rel="noopener noreferrer" target="_blank" href="https://mariantonia416.github.io/unlimited-producciones/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="noopener noreferrer" target="_blank" href="https://mariantonia416.github.io/unlimited-producciones/html/servicios.html">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="noopener noreferrer" target="_blank" href="https://mariantonia416.github.io/unlimited-producciones/html/clientes.html">Clientes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="noopener noreferrer" target="_blank" href="https://mariantonia416.github.io/unlimited-producciones/html/galeria.html">Galería</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="noopener noreferrer" target="_blank" href="https://mariantonia416.github.io/unlimited-producciones/html/contacto.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default navBar