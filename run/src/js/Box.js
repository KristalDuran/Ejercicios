import React from "react";

class Box extends React.Component {
  render() {
      return (
        <div className="box">
          <div className="box__container-header">
            <h3 className="box__container-header__title">
              {this.props.data.name}
            </h3>
            {this.props.data.isCertified ? <div className="box__container-header__logo" /> : null}
          </div>
          <div className="box__upper-line" />
          <div className="box__information">
            <img
              className="box__information__picture"
              src="{this.props.data.image}"
            />
            <p className="box__information__text">
              {this.props.data.description}
            </p>
          </div>
          <div className="box__options">
            <p className="box__options__price">
              Desde: {this.props.data.rate} / {this.props.data.hours} horas
            </p>
            <button className="box__options__button button">Contratar</button>
          </div>
        </div>
      );
  }
}

export default Box;
