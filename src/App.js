import React, { Component } from "react";
import "./App.css";
import FeaturedBeer from "./components/featured-beer/FeaturedBeer.js";
import Button from "./components/button/Button.js";
import Products from "./components/products/Products.js";
import Logo from "./components/logo/Logo.js";

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
          <Logo />
          {this.state.beer !== "" && (
            <FeaturedBeer
              name={this.state.beer.name}
              tagline={this.state.beer.tagline}
              img={
                this.state.beer.image_url
                  ? this.state.beer.image_url
                  : this.state.standardImage
              }
              description={this.state.beer.description}
              food={this.state.beer.food_pairing}
            />
          )}

          <Button onClick={this.fetchRandomBeer}>Get another beer!</Button>
          <div>
            {this.state.allBeers.map(element => (
              <Products key={element.id} beer={element} />
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
