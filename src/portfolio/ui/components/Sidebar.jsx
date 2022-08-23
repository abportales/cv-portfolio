import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {

    const [collapse, setCollapse] = useState(true)
    const [collapse2, setCollapse2] = useState(true)

    return (
        <>
            <div className="container containerSideBar">
                <div className="sidenav">
                    <ul>
                        <li>
                            <NavLink to="/" className="nav-link">
                                <i className='bi bi-person-lines-fill'></i>
                                <span>Curriculum Vitae</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="nav-link">
                                <i className="bi bi-file-person"></i>
                                <span>Perfil</span>
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
        </>
    )
}
