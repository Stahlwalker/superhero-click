// For each item in the cardsArray array...
import React, {Component} from "react";
import cards from "../Cards/Cards"
import './CardsArrayDisplay.css';



class CardsArrayDisplay extends Component{
state={
       cards
   }
//handleClick(){}
    render(){
        console.log(this.state.cards)
        return(
            <div>{this.state.cards.map(card=>(
               <img src={require(`../Cards/Images/${card.img}`)} alt="pic"/>
                ))}</div>
           
            
        )
    }

}




// CardsArray.forEach(item => {
//     // Create a div
//     const card = document.createElement('div');
  
//     // Apply a card class to that div
//     card.classList.add('card');
  
//     // Set the data-name attribute of the div to the cardsArray name
//     card.dataset.name = item.name;
  
//     // Apply the background image of the div to the cardsArray image
//     card.style.backgroundImage = `url(${item.img})`;
  
//     // Append the div to the grid section
//     grid.appendChild(card);
//   });

  export default CardsArrayDisplay;
