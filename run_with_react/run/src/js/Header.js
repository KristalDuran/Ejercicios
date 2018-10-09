import React from "react";
import Menu from "./Menu";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo" />
        <Menu />
      </header>
    );
  }
}

export default Header;
