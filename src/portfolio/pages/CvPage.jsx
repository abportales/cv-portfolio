
import { BaseSection, List, TypeWriter } from '../components';
import { experience, languages } from '../data'

export const CvPage = () => {

  const data = experience;
  const list = languages

  return (
    <>
      <div className='containerCV'>
        <div className="card">
          <h1>Ing. Abraham Portales Nájera</h1>
          <hr />
          <h2>
            <TypeWriter message1={'Programador Web'} message2={'Desarrollador Web'} />
          </h2>
        </div>

        <h3>Perfil</h3>
        <div className='profile d-flex flex-row'>
          <div className="col-9 divBlock">
            <blockquote>
              Ingeniero con casi 3 años de experiencia desarrollando software en diferentes roles y tecnologías (Back-end, Front-end, Full-stack, Web y Móvil),
              tambien cuento con más de 3 años de experiencia  en soporte técnico, con conocimiento general de dispositivos de red y dispositivos de usuario final.
            </blockquote>
          </div>
          <img className='picture col-3 img-fluid' src="/assets/imp/picture.jpg" alt="picture profile" />
        </div>

        <h3>Experiencia en Programación</h3>
        <div className="languages">
          <List key={list[0].id} list={list[0].list} />
          <List key={list[1].id} list={list[1].list} />
          <List key={list[2].id} list={list[2].list} />
          <List key={list[3].id} list={list[3].list} />
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
