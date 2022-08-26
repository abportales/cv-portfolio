
import { BaseSection, List, PersonalData, TypeWriter } from '../components';
import { experience, languages } from '../data'
import { scrollToTop } from '../helpers/scrollToTop';

export const CvPage = () => {

  scrollToTop();
  const data = experience;
  const { id, list } = languages;

  return (
    <>
      <div className='containerCV'>

        <div className="card" data-aos="zoom-in">
          <h1>Ing. Abraham Portales Nájera</h1>
          <hr />
          <h2>
            <TypeWriter message1={'Programador Web'} message2={'Desarrollador Web'} />
          </h2>
        </div>

        <h3 data-aos="fade-right">Perfil</h3>
        <div className='profile' data-aos="fade-in">
          <blockquote data-aos="fade-left">
            Soy ingeniero en computación con casi 3 años de experiencia desarrollando software en diferentes roles y tecnologías (Back-end, Front-end, Full-stack, Web y Móvil),
            también cuento con más de 3 años de experiencia  en soporte técnico, con conocimiento general de dispositivos de red y dispositivos de usuario final.
          </blockquote>
          <img className='picture img-fluid' src="/assets/imp/picture.jpg" alt="picture profile" data-aos="fade-right" />
        </div>

        <PersonalData />
        <h3 data-aos="fade-right">Experiencia en Programación</h3>
        <div className="languages" data-aos="fade-left">
          <List key={id} list={list} />
        </div>

        <h3 data-aos="fade-in">Experiencia Laboral</h3>
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
