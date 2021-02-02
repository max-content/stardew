import React from 'react'
// import recipes from './recipes.json'
import './App.css';

function App() {
  const fetchFood = () => {
    fetch('https://api.scraper.ai/api/website/59b18671-3e6b-4829-9136-7c90f76e3c1b?api_key=44ba2e0f7ba967126f2888c995bcb535&json')
    .then(resp => resp.json())
    .then(data => showNames(data.data))
  }

  const showNames = (foods) => {
    foods.forEach(food => {
      console.log(food.names)
    })
  }

  return <div> {fetchFood()}</div>
}

export default App;
