import { scrollToTop } from "../helpers/scrollToTop";

export const HeroesPage = () => {

  scrollToTop();

  return (
    <div className='containerHeroes'>
      <div className="card" data-aos="zoom-in-left">
        <a href="https://heroes-spa-apn.web.app" target="_blank" rel="noopener noreferrer">
          <img src="/assets/web/heroes.jpg" className="img-fluid card-img-top img-thumbnail" alt="..." />
        </a>
        <div className="card-body">
        <h3 className="card-title">Heroes Page</h3>
          <p className='card-text'>
            El proyecto forma parte del curso: "React: De cero a experto (Hooks y Mern)" fue desarrollado en React18, Componentes JSX, Diseño con Boostrap5, e implementación
            de animaciones por librerias externas, las pruebas se realizaron con Jest, y el hosting vía firebase. <br />
            Profundizando más, tenemos las siguientes características:
          </p>
          <ul class="list-group card-text">
            <li class="list-group-item">
              Implementacion de Routers Push y Replace en el History con React-Router-Dom <br />
              Leer argumentos por URL QueryParams, aplicar filtros utilizando QueryStrings. <br />
              Rutas públicas, rutas privadas. <br />
              Optimización de ruta. <br />
              Login y logout simulado (sin back-end).
            </li>
            <li class="list-group-item">
              Pruebas en rutas privadas y públicas. <br />
              Pruebas en el AppRouter Simular URLs y segmentos. <br />
              Simular queryParams y queryStrings.
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <a href="https://heroes-spa-apn.web.app" target="_blank" rel="noopener noreferrer">
            Ir al sitio web...
          </a>
        </div>
      </div>
    </div>
  )
}
