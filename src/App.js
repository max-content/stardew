import React from 'react'
// import recipes from './recipes.json'
import './App.css';

function App() {
  const fetchFood = () => {
    fetch('https://raw.githubusercontent.com/ronniekram/stardew/main/src/recipes.json')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  return <div> {fetchFood()}</div>
}

export default App;
