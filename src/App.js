import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FeaturedBeer from "./components/featured-beer/FeaturedBeer.js";
import Button from "./components/button/Button.js";

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
      .then(data => this.setState({ beer: data[0] }))
      .catch(error => console.error(error));
  };

  fetchAllBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then(response => response.json())
      .then(data =>
        this.setState({ allBeers: [...this.state.allBeers, data[0]] })
      )
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FeaturedBeer
            name={this.state.beer.name}
            tagline={this.state.beer.tagline}
            img={this.state.beer.image_url}
            description={this.state.beer.description}
            food={
              this.state.beer.food_pairing
                ? this.state.beer.food_pairing
                : this.state.standardImage
            }
          />
          <Button onClick={this.fetchRandomBeer}>Get another beer</Button>
        </header>
      </div>
    );
  }
}

export default App;
