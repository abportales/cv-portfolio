import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {

    const [collapse, setCollapse] = useState(true)
    const [collapse2, setCollapse2] = useState(true)

    return (
        <>
            <div className="container-fluid containerSideBar">
                <div className="row">
                    <div className="sidenav">
                        <ul>
                            <li>
                                <NavLink to="/" className="nav-link">
                                    <i className='bi bi-person-lines-fill'></i>
                                    <span>Curriculum Vitae</span>
                                </NavLink>
                            </li>
                            <li>
                                <a href="#" onClick={() => (setCollapse(!collapse))}>
                                    <i className="bi bi-code-square"></i>
                                    <span>Desarrollo Web</span>
                                    {
                                        (collapse) ?
                                            <i className="bi bi-caret-down-square drop"></i>
                                            : <i className="bi bi-caret-up-square drop"></i>
                                    }
                                </a>
                                <ul className={collapse ? 'd-none' : 'd-show'}>
                                    <li>
                                        <NavLink to="/marcs" className="nav-link">
                                            <i className="bi bi-wordpress"></i>
                                            <span>Marc's Seafood</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/gifapp" className="nav-link">
                                            <i className="bi bi-filetype-gif"></i>
                                            <span>Gif App</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/heroes" className="nav-link">
                                            <i className="bi bi-award"></i>
                                            <span>Heroes</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/ortodoncia" className="nav-link">
                                            <i className="bi bi-window-dock"></i>
                                            <span>Ortodoncia</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" onClick={() => (setCollapse2(!collapse2))}>
                                    <i className='bi bi-android2'></i>
                                    <span>Android</span>
                                    {
                                        (collapse2) ?
                                            <i className="bi bi-caret-down-square drop"></i>
                                            : <i className="bi bi-caret-up-square drop"></i>
                                    }
                                </a>
                                <ul className={collapse2 ? 'd-none' : 'd-show'}>
                                    <li>
                                        <NavLink to="/movie" className="nav-link">
                                            <i className="bi bi-film"></i>
                                            <span>Movie API</span>

                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blogapp" className="nav-link">
                                            <i className="bi bi-chat-left-text"></i>
                                            <span>BlogApp</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/easyrestaurant" className="nav-link">
                                            <i className="bi bi-cup-straw"></i>
                                            <span>Easy Restaurant</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


{/* <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-person-lines-fill"></i> <span className="ms-1 d-none d-sm-inline">Curriculum Vitae</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> 
                            </NavLink>
                            <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
                        </li>
                        <li>
                            <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                            <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                        </li>
                    </ul> */}