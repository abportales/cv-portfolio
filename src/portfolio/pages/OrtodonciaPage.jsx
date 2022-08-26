import React from 'react'

export const OrtodonciaPage = () => {
  return (
    <div className='containerOrtodoncia' data-aos="fade-up">
      <div className="card">
        <a href="https://malagon-ortodoncia.web.app/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/web/ortodoncia.jpg" className="img-fluid card-img-top img-thumbnail" alt="..." />
        </a>
        <div className="card-body">
        <h3 className="card-title">Malagón Ortodoncia y Estética Dental</h3>
          <p className="card-text">
            Este proyecto fue realizado para un cliente que tiene su consultorio dental, el cliente quería mostrar
            todos los servicios que ofrece, brindar información sobre la nueva tecnología que maneja, su ubicación,
            sus redes sociales e información para que lo contacten. <br />
            La pagina es totalmente responsive, se adapta
            tanto a diferentes tamaño de pantallas, así como de celulares.<br />
            En este proyecto se puede destacar:
          </p>
          <ul class="list-group card-text">
            <li class="list-group-item">
              Uso de React-Vite en la optimización de componentes JSX.
            </li>
            <li class="list-group-item">
              Creacion de una Single Page Application con React-Router-Dom, para eliminar tiempos entre cambios de página.
            </li>
            <li class="list-group-item">
              Uso de AOS libreria de terceros para las animaciones de los componentes JSX.
            </li>
            <li class="list-group-item">
              Uso de Firebase-Hosting como servidor público para mostrar la página y de Firebase-Storage como servidor de almacenamiento y optimización en la visualización de archivos multimedia de la página.
            </li>
            <li class="list-group-item">
              Uso de libreria GoogleMap y GoogleMapApi para tener acceso al mapa dentro del componente JSX.
            </li>
            <li class="list-group-item">
              Implementación de StyledComponents, para los efectos de galeria en las fotos de la sección 'Para pacientes'.
            </li>
            <li class="list-group-item">
              Consumo de las opciones de desarrollador de facebook, para obtener comentarios de usuarios y asignarles formato.
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <a href="https://malagon-ortodoncia.web.app/" target="_blank" rel="noopener noreferrer">
            Ir al sitio web...
          </a>
        </div>
      </div>
    </div >
  )
}
