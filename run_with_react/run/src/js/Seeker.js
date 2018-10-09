import React from "react";
import Agent from "./Agent";

const URL_JSON = "https://api.myjson.com/bins/uptto";

class Seeker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(e) {
    var value_user_input = e.target.value;
    if (value_user_input.length >= 3) {
      value_user_input = value_user_input.toUpperCase();
      const filteredDataName = this.state.data.companies.filter(agent =>
        agent.name.toUpperCase().includes(value_user_input)
      );
      const filteredDataDescription = this.state.data.companies.filter(agent =>
        agent.description.toUpperCase().includes(value_user_input)
      );
    }
  }
  componentDidMount() {
    fetch(URL_JSON)
      .then(response => response.json())
      .then(dataJson => this.setState({ data: dataJson }));
  }
  render() {
    return (
      <div className="seeker">
        <img className="seeker__image" />
        <h1 className="seeker__title">Los Mejores agentes de seguridad</h1>
        <input
          className="seeker__input"
          id="input"
          placeholder="Buscar por Empresa"
          onChangeCapture={this.updateState}
        />
      </div>
    );
  }
}

export default Seeker;
