import React from "react";
import Agent from "./Agent";
import Footer from "./Footer";
import Header from "./Header";
import Seeker from "./Seeker";
import "../css/App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="containerP">
        <Header />
        <Seeker />
        <Agent />
        <Footer />
      </div>
    );
  }
}

export default App;
