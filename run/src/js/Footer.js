import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__author">
          Desarrollado por Akurey.com|Todos los derechos reservados
        </div>
        <a className="footer__link" href="">
          Términos y Condiciones
        </a>
      </footer>
    );
  }
}

export default Footer;
