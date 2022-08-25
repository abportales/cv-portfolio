import { Courses } from "../components";
import { scrollToTop } from "../helpers/scrollToTop";

export const Contacto = () => {

    scrollToTop();
    return (
        <>
            <div className="containerContact">

                <div className="card" data-aos="fade-left">
                    <h3 className="card-header"> Estudios </h3>
                    <div className="card-body">
                        <p>
                            Universidad Autónoma de San Luis Potosí
                        </p>
                        <p>
                            Licenciatura como Ingeniero en Computación
                        </p>
                        <p>
                            Cédula Profesional: <span>9540600</span>
                        </p>
                        <p>
                            Julio 2007 - Diciembre 2014
                        </p>
                    </div>
                </div>

                <Courses />

                <div className="card" data-aos="fade-left">
                    <h3 className="card-header"> Habilidades </h3>
                    <div className="card-body">
                        <p>
                            <span>Técnicas:</span>  <br /> Solución a problemas con software y diagnóstico y/o reemplazo de hardware en general, dominio de Office.
                        </p>
                        <p>
                            <span>Personales:</span>  <br /> Autodidacta, Trabajo en equipo, Analítico, Pensamiento lógico,
                            Honesto, Responsable, Trabajo bajo presión.
                        </p>
                    </div>
                </div>

                <div className="card" data-aos="fade-right">
                    <h3 className="card-header"> Pasatiempos </h3>
                    <ul className="card-body">
                        <li>
                            Seleccionado Estatal de Tiro con Arco para Torneo Inter-Universidades 2013.
                        </li>
                        <li>
                            Seleccionado Estatal de Ajedrez para Torneo Inter-Universidades 2009.
                        </li>
                    </ul>
                    <p className="card-body">
                        En mis tiempos libres me gusta tomar cursos de programación y seguir aprendiendo tecnologías nuevas.
                        Actualmente estoy aprendiendo React para poder programar en React Native y desarrollar proyectos multiplataforma.
                    </p>
                </div>

                <div className="card" data-aos="fade-left">
                    <h3 className="card-header"> Viajes y Estancias </h3>
                    <p className="card-body">
                        Cuando trabajé para Sonda, tuve la oportunidad de viajar y conocer muchos municipios y localidades del estado de S.L.P., así como estados vecinos que a su vez me permitieron conocer muchas personas y empresas.
                    </p>
                </div>

                <div className="card" data-aos="fade-right">
                    <h3 className="card-header"> Idiomas </h3>
                    <ul className="card-body">
                        <li>
                            <span>Español:</span>  Nativo
                        </li>
                        <li>
                            <span> Inglés: </span>
                        </li>
                        <ul>
                            <li> Lectura <span>85%</span> </li>
                            <li> Escritura <span>70%</span>  </li>
                            <li> Conversación <span>50%</span> </li>
                        </ul>
                    </ul>
                </div>
            </div>
        </>
    )
}


