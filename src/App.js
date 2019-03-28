import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/HomePage.js";
import ProductPage from "./components/ProductPage";
import SingleProductPage from "./components/SingleProductPage";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    beer: "",
    allBeers: [],
    standardImage:
      "https://i.pinimg.com/originals/ea/b6/5b/eab65bccd941cb4ee55d5880c4419aa8.jpg"
  };
  componentDidMount = () => {
    this.fetchRandomBeer();
    this.fetchAllBeers();
  };

  fetchRandomBeer = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(response => response.json())
      .then(data => {
        this.setState({ beer: data[0] });
      })
      .catch(error => console.error(error));
  };

  fetchAllBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then(response => response.json())
      .then(data =>
        this.setState({ allBeers: [...this.state.allBeers, ...data] })
      )
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Router>
          <Home
            standardImg={this.state.standardImage}
            beer={this.state.beer}
            fetchRandomBeer={this.fetchRandomBeer}
            path="/"
          />
          <ProductPage allBeers={this.state.allBeers} path="/products" />
          <SingleProductPage path="/products/:id" />
        </Router>
      </div>
    );
  }
}

export default App;
