import React from 'react';

class Names extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      recipes: this.props
    }
    console.log(props)
  }

  render() {

    // const showNames = (foods) => {
    //   // let foodArray = foods.data
    //   return foodArray.map(food => {
    //     return <li>{food.names}</li>
    //   })
    // }
    return ( null
      // <div> <ul>{this.state.recipes.map(food => {
      //   return <li> {food.names} </li>
      // })}</ul> </div>
    )
  }
}

export default Names;