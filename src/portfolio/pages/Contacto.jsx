
export const Contacto = () => {
    return (
        <>
            <div className="containerContact border">
                <div className="card cardAuto">
                    <div className="card-header">
                        <h3> Datos Personales </h3>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>
                                <i className="bi bi-telephone"></i>
                                <span>44-44-92-28-72</span>
                            </li>
                            <li>
                                <i className="bi bi-calendar-date"></i>
                                <span>14 de Octubre de 1989</span>
                            </li>
                            <li>
                                <i className="bi bi-geo-alt-fill"></i>
                                <span>San Luis Potosí, S.L.P.</span>
                            </li>
                            <li>
                                <i className="bi bi-envelope-check"></i>
                                <span>portales.ab@gmail.com</span>
                            </li>
                            <li>
                                <i className="bi bi-linkedin"></i>
                                <a href="https://www.linkedin.com/in/abraham-portales-947275150/" target="_blank" rel="noopener noreferrer">
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <i className="bi bi-github"></i>
                                <a href="https://github.com/abportales" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3> Habilidades </h3>
                    </div>
                    <div className="card-body">
                        <p>
                            Técnicas: Solución a problemas con software y diagnóstico y/o reemplazo de hardware en general, dominio de Office 365
                        </p>
                        <p>
                            Personales: Autodidacta, Trabajo en equipo, Analítico, Pensamiento lógico,
                            Honesto, Responsable, Trabajo bajo presión.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3> Pasatiempos </h3>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>
                                Seleccionado Estatal de Tiro con Arco para Torneo Inter-Universidades 2013.
                            </li>
                            <li>
                                Seleccionado Estatal de Ajedrez para Torneo Inter-Universidades 2009.
                            </li>
                        </ul>
                        <p>
                            En mis tiempos libres me gusta tomar cursos de programación y seguir aprendiendo tecnologías nuevas.
                            Actualmente estoy aprendiendo React para poder programar en React Native y desarrollar proyectos multiplataformas.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3> Viajes y Estancias </h3>
                    </div>
                    <div className="card-body">
                        <p>
                            Cuando trabajé para Sonda, tuve la oportunidad de viajar y conocer muchos municipios y localidades del estado de S.L.P. así como estados vecinos que a su vez me permitieron conocer muchas personas y empresas.
                        </p>
                    </div>
                </div>

                <div className="card cardAuto">
                    <div className="card-header">
                        <h3> Idiomas </h3>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>
                                Español: Nativo
                            </li>
                            <li>
                                Inglés:
                            </li>
                            <ul>
                                <li> Lectura 85% </li>
                                <li> Escritura 70% </li>
                                <li> Conversación 50% </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


