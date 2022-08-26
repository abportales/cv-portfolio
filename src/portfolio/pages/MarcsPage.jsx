import React from 'react'
import { scrollToTop } from '../helpers/scrollToTop';

export const MarcsPage = () => {

  scrollToTop();

  return (
    <>
      <div className='containerMarcs'>
        <div className="card" data-aos="zoom-in">
          <a href="http://marcsseafood.x10.mx/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/web/marcs.jpg" className="img-fluid card-img-top img-thumbnail" alt="..." />
          </a>
          <div className="card-body">
            <h3 className="card-title">Marc's Seafood</h3>
            <p className="card-text">
              La página web se desarrollo en Wordpress, ayudaba a los clientes con un fácil acceso al menú por
              medio del escaneo de código QR que se encontraba en la mesa. Contiene toda la información de los
              platillos, horarios, ubicación, oferta de trabajo y redes sociales.
            </p>
          </div>
          <div className="card-footer">
            <a href="http://marcsseafood.x10.mx/" target="_blank" rel="noopener noreferrer">
              Ir al sitio web...
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
