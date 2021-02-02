import React from 'react'
import recipes from './recipes.json'
// import './App.css';

class App extends React.Component {

  render() {
    const list = recipes.data

    const renderFoods = (foods) => {
      foods.map(food => {
        return <li> {food.names} </li>
      });
    }

    console.log(list[0].names);
    return (<div>
      <ul> {renderFoods(list)}</ul>
    </div>
    )
  }

}

export default App;
