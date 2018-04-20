import React from "react";
// import cards from "../Cards/Cards"
import './CardsArrayDisplay.css';



const CardsArrayDisplay = (props) => (
// handleClick = () =>
// {
//     console.log("click working");
//     const shuffleImages = this.state.cardsArr.sort((a,b) => 0.5 - Math.random())
//     this.setState({cardsArr: shuffleImages}) 
// }
     
            <div>{props.cardsArr.map(card=>(
              <img onClick={props.handleClick} src={require(`../Cards/Images/${card.img}`)} alt="pic"/>
                ))} 
                </div>
    
);
  export default CardsArrayDisplay;
