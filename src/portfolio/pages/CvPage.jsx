import React from 'react'
import { BaseSection } from '../components';
import { experience } from '../data/cv'

export const CvPage = () => {

  const data = experience;

  return (
    <>
      <div className='containerCV'>
        <div className="card">
          <h1>Ing. Abraham Portales Nájera</h1>
          <hr />
          <h2>Desarrollador Web</h2>
        </div>
        <div className='profile'>
          <h3>Perfil</h3>
          <blockquote>
          Ingeniero con casi 3 años de experiencia desarrollando software en diferentes roles y tecnologías (Back-end, Front-end, Full-stack, Web y Móvil),
          tambien cuento con más de 3 años de experiencia  en soporte técnico, con conocimiento general de dispositivos de red y dispositivos de usuario final.
          </blockquote>
        </div>
        <div className='experience'>
          <h3>Experiencia Laboral</h3>
          {
            data.map( (item) => (
              <BaseSection key={item.id} {...item} />
            ))
          }
        </div>
      </div>
    </>
  )
}
