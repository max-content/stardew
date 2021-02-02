import React from 'react';

class Names extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: props.recipes
    }

    // console.log(this.state.recipes)
  }
  render() {
    const listRecNames = () => {
      return this.state.recipes.map(food => {
        return <li> {food.names} </li>
      })
    }
    return (
      <ul> 
        {listRecNames()}
      </ul>
    )
  }
}

export default Names;