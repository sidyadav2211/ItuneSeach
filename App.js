import React, { Component } from 'react';
import Search from './Search/Search'
import List from './Search/List'
import './App.css';

class App extends Component {

   
    state = {
      results: [],
      loading: true
    };
  

  componentDidMount() {
    this.performSearch("");
  }

  performSearch = query  => {
    fetch(`https://itunes.apple.com/search?term=${query}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          results: responseData.results,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    return ( 
      <div className = "App">
        <Search onSearch = {this.performSearch} /> 
        <div> 
          {
            (this.state.loading) ? <p>Loading...</p> :<List results={this.state.results} />
          } 
        </div> 
      </div>
    );
  }
}

export default App;
