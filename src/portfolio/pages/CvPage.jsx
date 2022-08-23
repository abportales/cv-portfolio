
import { BaseSection, List, PersonalData, TypeWriter } from '../components';
import { experience, languages } from '../data'

export const CvPage = () => {

  const data = experience;
  const { id, list } = languages;

  return (
    <>
      <div className='containerCV border'>
        <div className="card">
          <h1>Ing. Abraham Portales Nájera</h1>
          <hr />
          <h2>
            <TypeWriter message1={'Programador Web'} message2={'Desarrollador Web'} />
          </h2>
        </div>

        <h3>Perfil</h3>
        <div className='profile'>
          <blockquote>
            Ingeniero con casi 3 años de experiencia desarrollando software en diferentes roles y tecnologías (Back-end, Front-end, Full-stack, Web y Móvil),
            tambien cuento con más de 3 años de experiencia  en soporte técnico, con conocimiento general de dispositivos de red y dispositivos de usuario final.
          </blockquote>
          <img className='picture img-fluid' src="/assets/imp/picture.jpg" alt="picture profile" />
        </div>

        <PersonalData/>

        <h3>Experiencia en Programación</h3>
        <div className="languages">
          <List key={id} list={list} />
        </div>

        <h3>Experiencia Laboral</h3>
        <div className='experience'>
          {
            data.map((item) => (
              <BaseSection key={item.id} {...item} />
            ))
          }
        </div>

      </div>
    </>
  )
}
