import logo from "../assets/imgs/logo.png";
import MyCart from "./MyCart";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container-fluid px-4">
        {/* Logo con contenedor especial */}
        <div className="logo-wrapper">
          <a className="navbar-brand" href="/">
            <img 
              src={logo} 
              alt="logo" 
              className="logo-img swing-on-hover"
            />
          </a>
        </div>

        {/* Botón del menú hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <CiMenuFries className="menu-icon" />
        </button>

        {/* Contenido colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                
              </a>
            </li>
          </ul>
          <MyCart />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
