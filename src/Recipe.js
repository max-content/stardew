import React from 'react';
import energy from '../public/img/energy.png';
import health from '../public/img/health.png'

class Recipe extends React.Component {
  render() {
    return (
      <div className="recipe-card">
        <div className="recipe-header">
          <h3> Farmer's Lunch </h3> <img src="https://stardewcommunitywiki.com/mediawiki/images/7/79/Farmer%27s_Lunch.png" />
        </div>
        <div className="recipe-info">
          <p> <strong>Buffs: </strong> Farming + 3</p>
          <p> <strong>Buff Duration: </strong> 5m 35s</p>
          <p> <img src={energy} /> 200 </p>
          <p> <img src={health} /> 90 </p>
          <p><strong>Sell Price: </strong> 150g</p>
        </div>
        <div clasName="recipe-ingredients">
           <p> <strong> Ingredients:</strong> </p> 
           <ul>
             <li> Omelet (1)</li>
             <li> Parsnip (1) </li>
           </ul>
           </div>

      </div>
    )
  }
}

export default Recipe;