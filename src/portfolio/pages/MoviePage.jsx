import React from 'react'
import { scrollToTop } from '../helpers/scrollToTop';

export const MoviePage = () => {

  scrollToTop();

  return (
    <div className='containerMovieApp'>
      <div className="card" data-aos="zoom-in-right">
          <img src="/assets/android/movie00.jpg" className="img-fluid card-img-top img-thumbnail" alt="..." />
        <div className="card-body">
        <h3 className="card-title">Movie API</h3>
          <p className="card-text">
            Este proyecto forma parte del curso: "Curso definitivo para aprender a programar en Android (Kotlin)" 
            se desarrollo en Kotlin, con el objetivo de consumir un API de The Movie Database (TMDB),
            hacen 3 peticiones la servidor, una para "upcoming movies", otra para "top rated movies" y la última "popular movies",
            se uso tecnologia MVVM, un recycler view para cada sección de peliculas, un card-item para cada pelicula, y el uso de fragmetos
            para optimizar el cambio de pantallas, en la cual se muestra toda la información de la pelicula seleccionada.
          </p>
        </div>
      </div>
    </div>
  )
}
