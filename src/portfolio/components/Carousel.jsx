export const Carousel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/android/easyrestaurant00.jpg" className="img-fluid card-img-top img-thumbnail" alt="..." />
                        <div className="carousel-caption bgDark">
                            <h5>Login</h5>
                            <span>
                                La cuenta administrador, tiene acceso directo y permisos de crear pre-registros
                                para controlar el acceso y distribución de la aplicación.
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/android/easyrestaurant01.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption bgDark">
                            <h5>Pantalla princial</h5>
                            <span>
                                En esta parte muestra las mesas con pedidos actuales y se muestra el menú de administrador, en el cual podremos
                                dar de alta categorías de platillos, platillos, mesas y empleados, a su vez, modificar y elimar cada una de ellas.
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/android/easyrestaurant02.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption bgDark">
                            <h5>Dar de alta</h5>
                            <span>
                                Sección para dar de alta, categoría, platillo y mesas.
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/android/easyrestaurant03.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption bgDark">
                            <h5>Dar de alta empleado y Consulta de ventas</h5>
                            <span>
                                El administrador da de alta a los empleados, y puede crear empleados administradores, para las
                                modificaciones que requiera la aplicación, también se observa la consulta de reportes, puede ser por
                                día o por rango de fechas, se puede imprimir, la aplicación genera un archivo PDF.
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/android/easyrestaurant04.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption bgDark">
                            <h5>Toma de pedidos / Comanda</h5>
                            <span>
                                Esta pantalla muestra cuando se toma un pedido, se puede tener la opción a agregar numero de clientes
                                para así tener cuentas separadas al momento de pagar.
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/android/easyrestaurant05.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption bgDark">
                            <h5>Vista general y principal del pedido</h5>
                            <span>
                                Se visualizan las mesas disponibles del restaurante, asi como los pedidos activos, al dar clic a la mesa
                                se puede ver la orden del cliente, cada vez que se hace un pedido, llega una notificación a todos los dispositivos
                                para avisar a cocina y barra, asi como gerentes.
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/android/easyrestaurant06.jpg" className="d-block imgCarousel" alt="..." />
                        <div className="carousel-caption bgDark">
                            <h5>Vista de cocina y barra</h5>
                            <span>
                                Aquí los empleados de cocina y barra pueden tener un rapido acceso a la orden del cliente, y cuando el mesero
                                recoge el pedido y es entregado se da "check" y ya no les aparecera más.
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/android/easyrestaurant07.jpg" className="d-block imgCarousel" alt="..." />
                        <div className="carousel-caption bgDark">
                            <h5>Cobro y Ticket</h5>
                            <span>
                                Pantalla del mesero, el cual hace el cobro, puede poner la cantidad que le pagaron y la aplicación regresa el cambio
                                y al hacerlo se genera un pdf con el ticket para imprimirlo y llevarselo al cliente.
                            </span>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
