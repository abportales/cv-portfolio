import { Carousel } from '../components'
import { scrollToTop } from '../helpers/scrollToTop';

export const EasyRestaurantPage = () => {

  scrollToTop();

  return (
    <div className='containerEasyRestaurant'>
      <div className="card" data-aos="zoom-in-left">
        <Carousel />
        <div className="card-body">
          <h3 className="card-title">Easy Restaurant</h3>
          <p className="card-text">
            Este proyecto se desarrollo en Kotlin para un cliente dueño de un restaurante, quería una forma de tomar pedidos eficiente, así como tener el
            control de las ventas por día, cuanto tiempo tardaban los pedidos, y que siempre se atendieran los pedidos en orden, para hacerlo mas
            escalable, desarrolle CRUD's para cada ámbito, así el administrador/dueño del restaurante, podría crear lo que necesite en cualquier momento
            sin necesidad de que el desarrollador tenga que modificar código.
          </p>
        </div>
      </div>
    </div>
  )
}
