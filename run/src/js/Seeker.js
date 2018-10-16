import React from "react";
import Box from "./Box";

const URL_JSON = "https://api.myjson.com/bins/uptto";
var agentData = {};
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
      const filteredData = agentData.companies.filter(
        agent =>
          agent.name.toUpperCase().includes(value_user_input) ||
          agent.description.toUpperCase().includes(value_user_input)
      );
      this.setState({ data: { companies: filteredData } });
    } else {
      this.getDataFromURL();
    }
  }
  getDataFromURL() {
    fetch(URL_JSON)
      .then(response => response.json())
      .then(dataJson => {
        agentData = dataJson;
        this.setState({ data: dataJson });
      });
  }
  componentDidMount() {
    this.getDataFromURL();
  }
  render() {
    if (this.state.data.companies) {
      return (
        <div>
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
          <div className="container">
            {this.state.data.companies.map((agent, i) => (
              <Box key={i} data={agent} />
            ))}
          </div>
        </div>
      );
    }
    return (
      <div>
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
      </div>
    );
  }
}

export default Seeker;
