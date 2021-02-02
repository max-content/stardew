import React from 'react'
import recipes from './recipes.json'
import Names from './Names'
// import './App.css';

class App extends React.Component {

  render() {
    const list = recipes.data

    // const renderFoods = (foods) => {
    //   foods.map(food => {
    //     return <li> {food.names} </li>
    //   });
    // }

    // console.log(list[0].names);
    return (<div>
      <Names recipes={list} />
    </div>
    )
  }

}

export default App;
