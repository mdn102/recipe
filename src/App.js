import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm.js';
import RecipeGrid from './RecipeGrid.js';
import axios from 'axios';


const apiID= process.env.REACT_APP_API_ID;
const apiKey= process.env.REACT_APP_API_KEY;


class App extends Component {
  constructor(){
    super();
    this.state = {value: '', recipes:[]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getEndpoint(){
      return `https://api.edamam.com/search?q=query&app_id=${apiID}&app_key=${apiKey}&from=0&to=5`.replace("query", this.state.value)
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();

    axios.get(this.getEndpoint())
      .then(res => {
        const recipes = res.data.hits;
        this.setState({ recipes });
        console.log(res.data.hits);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Seeking Your Recipes Today</h1>
        </header>
        <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>
        <br />
        <RecipeGrid data={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
