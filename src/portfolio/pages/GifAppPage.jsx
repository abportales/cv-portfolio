export const GifAppPage = () => {
  return (
    <div className='containerGifApp'>
      <div className="card" data-aos="zoom-in-right">
        <a href="https://abportales.github.io/react-gif-expert/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/web/gifapp.jpg" className="img-fluid card-img-top img-thumbnail" alt="..." />
        </a>
        <div className="card-body">
        <h3 className="card-title">Gif Expert App</h3>
          <p className="card-text">
            Este proyecto forma parte del curso: "React: De cero a experto (Hooks y Mern)" 
            se desarrollo con React18, con el objetivo de consumir un API de Giphy. <br />
            El usuario realiza una búsqueda la aplicación hace una petición al servidor y muestra los datos 
            obtenidos al usuario por medio de componentes JSX a los cuales se les dio diseño con Boostrap5.
            La página mostrara 10 imagenes animadas(.gif) relacionadas con las palabras clave proporcionadas,
            a su vez se generara un historial de todas las búsquedas que haga el usuario, mostrando la mas 
            reciente. <br />
            Como prueba se utilizó el servicio de GitHub Pages, para tener la página web de forma pública.
          </p>
        </div>
        <div className="card-footer">
          <a href="https://abportales.github.io/react-gif-expert/" target="_blank" rel="noopener noreferrer">
            Ir al sitio web...
          </a>
        </div>
      </div>
    </div>
  )
}
