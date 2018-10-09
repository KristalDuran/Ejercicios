import React from "react";
import Box from "./Box";

const URL_JSON = "https://api.myjson.com/bins/uptto";

class Agent extends React.Component {
  constructor() {
    super();
    this.state = { data: {} };
  }

  componentDidMount() {
    fetch(URL_JSON)
      .then(response => response.json())
      .then(dataJson => this.setState({ data: dataJson }));
  }
  componentDidUpdate() {
    if (this.dataUser) {
      this.setState({ data: this.dataUser });
    }
  }
  render() {
    if (this.state.data.companies) {
      if (this.dataUser) {
        console.log("data " + this.dataUser);
        return (
          <div className="container">
            {this.state.data.map((person, i) => (
              <Box key={i} data={person} />
            ))}
          </div>
        );
      }
      return (
        <div className="container">
          {this.state.data.companies.map((person, i) => (
            <Box key={i} data={person} />
          ))}
        </div>
      );
    }
    return <div className="container" />;
  }
}

export default Agent;
