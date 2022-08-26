import { scrollToTop } from "../helpers/scrollToTop"

export const BlogAppPage = () => {
  scrollToTop();

  return (
    <div className='containerBlog'>
      <div className="card" data-aos="zoom-in">
        <img src="/assets/android/blog00.jpg" className="img-fluid card-img-top img-thumbnail" alt="..." />
        <div className="card-body">
          <h3 className="card-title">BlogApp</h3>
          <p className="card-text">
            Este proyecto forma parte del curso: "Curso definitivo para aprender a programar en Android (Kotlin)"
            se desarrollo en Kotlin, es una aplicación que cuenta con registro de e-mail, desarrollado en firebase-authentication,
            el control de post, información del post, likes, es desarrollado en firebase-cloud, y el almacenamiento de las imagenes
            es desarrollado en firebase-storage. <br />
            Básicamente inicias sesíon, das clic en photo, tomas una foto, le agregas una descripción y subes la foto, esto aparece en todos
            los dispositivos que tengan la aplicación y es mostrada en tiempo real.
          </p>
        </div>
      </div>
    </div>
  )
}
