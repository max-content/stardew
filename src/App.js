import React from 'react'
import Names from './Names'
// import recipes from './recipes.json'
// import './App.css';

class App extends React.Component {
  fetchFood = () => {
    fetch('https://api.scraper.ai/api/website/59b18671-3e6b-4829-9136-7c90f76e3c1b?api_key=44ba2e0f7ba967126f2888c995bcb535&json')
    .then(resp => resp.json())
    .then(data => data)
  }

  render() {
    return <Names foods={() => {this.fetchFood()}} />
  }
}

export default App;
