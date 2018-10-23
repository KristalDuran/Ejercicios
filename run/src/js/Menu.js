import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <nav className="menu__nav">
          <ul className="menu__items">
            <li className="menu__item">
              <a
                className="menu__item--select menu__item--first "
                href="#"
                id="menu-agents"
              >
                Directorio de Agentes
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__item--select" href="#">
                Contacto
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__item--select menu__item--last" href="#">
                Ingresar
              </a>
            </li>
          </ul>
          <ul className="menu__figures">
            <li className="menu__figure" />
            <li className="menu__figure" />
            <li className="menu__figure" />
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
