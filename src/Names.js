import React from 'react';
import Recipe from './Recipe'

class Names extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: props.recipes, 
      avatars: props.avs
    }
  }
  render() {
    const listRecNames = () => {
      return this.state.recipes.map(food => {
        return <li> {food.names} <img src={food.avs} /> </li>
      })
    }
    return (
      // <ul> 
      //   {listRecNames()}
      // </ul>
      <Recipe />
    )
  }
}

export default Names;